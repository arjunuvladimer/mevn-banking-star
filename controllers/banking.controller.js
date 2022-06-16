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

}
// Get By ID
exports.getById = (req,res,next) =>{

}
// Get By Email
exports.getByEmail = (req,res,next) =>{

}
// Update
exports.updateById = (req,res,next) =>{

}
// Delete By Id
exports.deleteById = (req,res,next) =>{

}
// Delete All
exports.deleteAll = (req,res,next) =>{

}


