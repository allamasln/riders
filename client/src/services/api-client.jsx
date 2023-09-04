import axios from 'axios'

import { toast } from 'react-toastify'

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({ baseURL })

apiClient.interceptors.response.use(
	(response) => {
		// 200

		console.log('respuesta', response)

		return response
	},

	(error) => {
		if (error.response.status >= 500) {
			toast.error(error.response.data.message)
		} else if (error.response.status >= 400) {
			const errorMessages = error.response.data.map((error) => error.msg)
			toast.error('Datos de formulario invalidos')
			// toast.error(
			// 	<div>
			// 		{errorMessages.map((msg) => (
			// 			<>
			// 				<span key={msg}>- {msg}</span>
			// 				<br />
			// 			</>
			// 		))}
			// 	</div>
			// )
		}

		return Promise.reject(error)
	}
)

export const setToken = (token) => {
	apiClient.defaults.headers.common['x-auth-token'] = token
}

export default apiClient
