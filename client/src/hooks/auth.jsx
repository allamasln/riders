import { createContext, useContext, useReducer } from 'react'
import authService from '../services/auth-service'

const user = authService.getCurrentUser()

const initialValue = !user
	? { auth: false }
	: user.admin
	? { auth: true, admin: true, username: user.username }
	: { auth: true, username: user.username }

const AuthContext = createContext(initialValue)

function reducer(state, action) {
	switch (action.type) {
		case 'login':
			return { auth: true, username: action.payload.username }

		case 'admin':
			return { auth: true, admin: true, username: action.payload.username }

		case 'logout':
			return { auth: false }

		default:
			throw new Error('')
	}
}

const AuthProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialValue)

	return (
		<AuthContext.Provider value={[value, dispatch]}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
