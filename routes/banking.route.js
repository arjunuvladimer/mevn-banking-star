const express = require('express')

const router = express.Router()

const controller = require('../controllers/banking.controller')


router.post('/banking/addCustomer', controller.create)

module.exports = router