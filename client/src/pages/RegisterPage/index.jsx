import { Stack } from '@mui/material'
import { Form } from 'components'

import { getFormFields, validationSchema } from './form-fields'

function RegisterPage() {
	// const [errorsFromResponse, setErrorsFromResponse] = useState({})

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Crear cuenta"
					buttonLabel="Registrar"
					formFields={getFormFields()}
					onSubmit={onSubmit}
					// errorsFromResponse={errorsFromResponse}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default RegisterPage
