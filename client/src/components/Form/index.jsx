import { Button, Typography, Box, Stack } from '@mui/material'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { transformData } from './helpers'

import fields from './fields'
import _ from 'lodash'

const Form = ({
	errorsFromResponse,
	heading,
	formFields,
	buttonLabel,
	onSubmit,
	validationSchema,
	defaultValues,
}) => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
	})

	return (
		<form
			onSubmit={handleSubmit((data) => onSubmit(transformData(data), reset))}
		>
			<Typography variant="h2" component="h2" mb="2rem">
				{heading}
			</Typography>

			<Stack spacing={3} width="50vw">
				{formFields.map(({ name, ...rest }) => {
					const InputForm = fields[rest.type] || fields.input

					return (
						<Controller
							key={name}
							control={control}
							name={name}
							render={({ field: { ref, ...field } }) => {
								return (
									<InputForm
										errors={
											errors[name] ||
											(errorsFromResponse && errorsFromResponse[name])
										}
										name={name}
										{...rest}
										{...field}
									/>
								)
							}}
						/>
					)
				})}
			</Stack>
			<Box mt="2rem" align="right">
				<Button type="submit" color="secondary" variant="contained">
					{buttonLabel}
				</Button>
			</Box>
		</form>
	)
}

export default Form
