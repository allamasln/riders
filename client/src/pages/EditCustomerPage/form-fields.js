import * as yup from 'yup'

const getFormFields = () => [
	{ name: 'name', label: 'Nombre' },
	{ name: 'latitude', label: 'Latitude' },
	{ name: 'longitude', label: 'Longitude' },
	{
		name: 'logo',
		type: 'file',
	},
]

const validationSchema = yup.object().shape({
	name: yup.string().required('Campo name obligatorio'),
	latitude: yup.number().required('Campo latitud obligatorio'),
	longitude: yup.number().required('Campo longitud obligatorio'),
})

const getErrorsFromResponse = (ex) => {
	if (ex.response.status === 500) return ''

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
