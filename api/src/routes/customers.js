const { Router } = require('express')
const customerController = require('../controllers/customers')
const { upload, customerValidationSchema } = require('../models/customer')

const validateParamId = require('../utils/validateParamId')

const validate = require('../middlewares/validate')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const router = Router()

router.get('/', customerController.getAll)
router.get(
	'/:customerId',
	validateParamId('customerId'),
	validate,
	customerController.getOne
)

router.post(
	'/',
	upload.single('logo'),
	customerValidationSchema,
	validate,
	customerController.create
)

router.put(
	'/:customerId',
	upload.single('logo'),
	validateParamId('customerId'),
	customerValidationSchema,
	validate,
	customerController.update
)

router.delete(
	'/:customerId',
	validateParamId('customerId'),
	validate,
	customerController.deleteOne
)

module.exports = router
