import { Stack, Button } from '@mui/material'
import { Form } from 'components'
import { toast } from 'react-toastify'
import { getFormFields, validationSchema } from './form-fields'

import { useAuth } from '../../hooks/auth'

import authService from '../../services/auth-service'

import { useNavigate } from 'react-router-dom'

function LoginPage() {
	const navigate = useNavigate()

	const [, dispatch] = useAuth()

	const onSubmit = (data) => {
		authService
			.login(data)
			.then((user) => {
				let action = user.isAdmin ? { type: 'admin' } : { type: 'login' }

				action.payload = {
					username: user.username,
				}
				dispatch(action)

				navigate(-1, { replace: true })
			})
			.catch((err) => {
				toast.error('Vuelve a intentarlo')
			})
	}

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Acceso usuarios"
					buttonLabel="Entrar"
					formFields={getFormFields()}
					onSubmit={onSubmit}
					// errorsFromResponse={errorsFromResponse}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default LoginPage
