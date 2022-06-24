const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const BankingCustomerModel = db.banking



// Create
exports.create = (req,res,next) =>{
    let {name,mobile,address,email,password} = req.body
    BankingCustomerModel.create({
        name,
        mobile,
        address,
        email,
        password
    }, (err,result) => {
        if(err){
            res.json({
                message: "Error while saving customer",
                error: err
            })
        }
        res.json({
            status:200,
            data:result
        })
    })
}
// Get All
exports.getAll = (req,res,next) =>{
    BankingCustomerModel.find({},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"success",
            message:"All Bankers Are Here",
            data:{
                model:result
            }
        })
    })

}
// Get By ID
exports.getById = (req,res,next) =>{
    BankingCustomerModel.findById(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved by ID Banker",
            data:{
                model:result
            }
        })
    })

}
// Get By Email
exports.getByEmail = (req,res,next) =>{
    BankingCustomerModel.find({"email":req.body.email},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved",
            data:{
                model: result
            }

        })
    })

}
// Update
exports.updateById = (req,res,next) =>{
BankingCustomerModel.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
    if(err)
    next(err)
    res.json({
        status:"Success",
            message:"Successfully Updated Banker By ID",
            data:{
                model: result
            }

    })
})
}
// Delete By Id
exports.deleteById = (req,res,next) =>{

    BankingCustomerModel.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Banker By ID",
            data:{
                model: result
            }

        })
    })
}
// Delete All
exports.deleteAll = (req,res,next) =>{
    BankingCustomerModel.remove({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Banker By ID",
            data:{
                model: result
            }

        })
    })
}

exports.login = (req, res, next) => {
    BankingCustomerModel.findOne({email: req.body.email},
      (err, result) => {
          if(err){
              next(err);
          }
          else{
              // bcrypt to compare the password(mongodb in hasheway) 
              // with the password sending from req.body
              if(bcrypt.compare(req.body.password, result.password, )){
                  // Generating the security token
                  // Sign Function
                  // Parameters
                  // 1. Id
                  // 2. secret key
                  // 3. how much time that security token needs to valid
                  const token = jwt.sign({id:result.id},req.app.get('secretKey'), {expiresIn:'1h'})
                  // Sending the response from the server to the user
                  res.status(200).json({
                      status: "Success",
                      message: "User Logged in Successfully",
                      data: {
                          user: result,
                          token: token
                      }
                  })
              }
          }
    });
  };