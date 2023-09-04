import { Stack } from '@mui/material'
import { Form } from 'components'
import { toast } from 'react-toastify'
import { getFormFields, validationSchema } from './form-fields'

import { useAuth } from '../../hooks/auth'

import authService from '../../services/auth-service'

import { useNavigate } from 'react-router-dom'

function RegisterPage() {
	// const [errorsFromResponse, setErrorsFromResponse] = useState({})

	const navigate = useNavigate()

	const [, dispatch] = useAuth()

	const onSubmit = async (data) => {
		try {
			const token = await authService.register(data)
			const user = await authService.loginWithToken(token)

			let action = user.isAdmin ? { type: 'admin' } : { type: 'login' }

			action.payload = {
				username: user.username,
			}
			dispatch(action)

			navigate(-1, { replace: true })
		} catch (error) {
			toast.error('Vuelve a intentarlo')
		}
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
