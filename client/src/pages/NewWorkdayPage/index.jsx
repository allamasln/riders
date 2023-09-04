import * as React from 'react'

import { CircularProgress, Stack, Typography } from '@mui/material'
import { Form } from 'components'

import { getFormFields, validationSchema } from './form-fields'

import { useCustomers } from 'hooks'

import customerService from 'services/customer-service'

function NewWorkdayPage() {
	const { customers, loading } = useCustomers()

	const onSubmit = (data) => {
		customerService.create(data).catch((err) => {
			console.log('ESTO', err)
		})
	}

	if (loading) return <CircularProgress />

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h2" component="h2">
					New Workday
				</Typography>

				<Form
					heading="New Workday"
					buttonLabel="Add Workday"
					formFields={getFormFields(customers)}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default NewWorkdayPage
