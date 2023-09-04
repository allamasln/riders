import { useAuth } from '../../hooks/auth'
import { Navigate } from 'react-router-dom'

import authService from '../../services/auth-service'

function LogoutPage() {
	const [user, dispatch] = useAuth()
	authService.logout()

	dispatch({ type: 'logout' })

	return <Navigate to="/login" />
}
export default LogoutPage
