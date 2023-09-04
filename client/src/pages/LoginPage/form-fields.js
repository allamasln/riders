import * as yup from 'yup'

const getFormFields = () => [
	{ name: 'username', label: 'Username', placeholder: 'eg: Manolito' },
	{ name: 'password', label: 'Password', type: 'password' },
]

const validationSchema = yup.object().shape({
	username: yup.string().required('username obligatorio'),
	password: yup.string().required('password obligatorio'),
})

const getErrorsFromResponse = (ex) => {
	const errors = {}

	ex.response.data.forEach((fieldError) => {
		if (!errors[fieldError.field]) {
			errors[fieldError.field] = {
				message: fieldError.msg,
				ref: { name: fieldError.field },
				type: 'typeError',
			}
		}
	})

	return errors
}

export { getFormFields, getErrorsFromResponse, validationSchema }
