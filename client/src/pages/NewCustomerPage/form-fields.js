import * as yup from 'yup'

const formFields = [{ name: 'test', label: 'Test' }]

const validationSchema = yup.object().shape({
	test: yup.string().required('El campo es requerido'),
})

export { formFields, validationSchema }
