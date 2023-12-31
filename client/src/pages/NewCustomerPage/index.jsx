import { useState } from 'react'

import { toast } from 'react-toastify'
import { Stack } from '@mui/material'
import { Form } from 'components'

import {
	getFormFields,
	getErrorsFromResponse,
	validationSchema,
} from './form-fields'

import customerService from '../../services/customer-service'

function NewCustomerPage() {
	const [errorsFromResponse, setErrorsFromResponse] = useState({})

	const onSubmit = (data, reset) => {
		setErrorsFromResponse({})

		customerService
			.create(data)
			.then(() => {
				reset()
				toast.success('Registro creado con éxito')
			})
			.catch((ex) => {
				setErrorsFromResponse(getErrorsFromResponse(ex))
			})
	}

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="New Customer"
					buttonLabel="Add Customer"
					formFields={getFormFields()}
					onSubmit={onSubmit}
					errorsFromResponse={errorsFromResponse}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default NewCustomerPage
