const express = require('express')

const router = express.Router()
const jwt = require('jsonwebtoken')

const verify = (req,res,next)  => {
    jwt.verify(req.headers['token'],req.app.get('secretKey'),(err,decoded)=>{
        if(err){
            next(err)
        }else{
            next()
        }
    })
}

const controller = require('../controllers/banking.controller')



router.get('/banking/getAll',verify, controller.getAll)
router.get('/banking/getById/:id',verify,controller.getById)
router.put('/banking/updateById/:id',verify, controller.updateById)
router.delete('/banking/deleteById/:id',verify,controller.deleteById)
router.delete('/banking/deleteAll',verify,controller.deleteAll)
router.post('/banking/getByEmail',verify,controller.getByEmail)

// Login
router.post('/banking/login',controller.login)
router.post('/banking/addCustomer', controller.create)

module.exports = router