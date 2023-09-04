import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CircularProgress, Stack } from '@mui/material'
import { Form } from 'components'
import _ from 'lodash'
import useCustomer from '../../hooks/useCustomer'

import {
	getFormFields,
	getErrorsFromResponse,
	validationSchema,
} from './form-fields'

import customerService from '../../services/customer-service'

function NewCustomerPage() {
	const { customerId } = useParams()

	const { customer, loading } = useCustomer(customerId)

	const [errorsFromResponse, setErrorsFromResponse] = useState({})

	const onSubmit = (data) => {
		setErrorsFromResponse({})

		customerService
			.update(data, customerId)
			.then(() => toast.success('Registro actualizado con éxito'))
			.catch((ex) => {
				setErrorsFromResponse(getErrorsFromResponse(ex))
			})
	}

	if (loading) return <CircularProgress />

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Edit Customer"
					buttonLabel="Edit Customer"
					formFields={getFormFields()}
					onSubmit={onSubmit}
					errorsFromResponse={errorsFromResponse}
					validationSchema={validationSchema}
					defaultValues={_.pick(customer, [
						'name',
						'latitude',
						'longitude',
						'logo',
					])}
				/>
			</Stack>
		</Stack>
	)
}
export default NewCustomerPage
