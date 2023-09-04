import * as yup from 'yup'

const getFormFields = (customers) => [
	{ name: 'date', label: 'Fecha', type: 'date' },
	{
		name: 'visits',
		label: 'Visits',
		type: 'select',
		options: customers.map((customer) => ({
			label: customer.name,
			value: customer._id,
		})),
		placeholder: 'Elige visita',
	},
]

const validationSchema = yup.object().shape({
	// date: yup.date().required('El campo es requerido'),
	// visits: yup.mixed(),
})

export { getFormFields, validationSchema }
