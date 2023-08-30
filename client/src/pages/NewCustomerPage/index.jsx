import * as React from 'react'

import { Stack, Typography } from '@mui/material'
import Form from '../../components/Form'

import { formFields, validationSchema } from './form-fields'

function NewCustomerPage() {
	const onSubmit = (data) => {
		console.log(data.get('test'))
	}
	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="New Customer"
					buttonLabel="Add Customer"
					formFields={formFields}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					defaultValues={{
						test: 'ESTO',
					}}
				/>
			</Stack>
		</Stack>
	)
}
export default NewCustomerPage
