const express = require('express')

const router = express.Router()

const controller = require('../controllers/banking.controller')


router.post('/banking/addCustomer', controller.create)
router.get('/banking/getAll',controller.getAll)
router.get('/banking/getById/:id',controller.getById)
router.put('/banking/updateById/:id',controller.updateById)
router.delete('/banking/deleteById/:id',controller.deleteById)
router.delete('/banking/deleteAll',controller.deleteAll)
router.post('/banking/getByEmail',controller.getByEmail)

module.exports = router