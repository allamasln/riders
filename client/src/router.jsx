import { createBrowserRouter } from 'react-router-dom'

import RootLayout from 'layouts/RootLayout'
import ErrorPage from 'pages/ErrorPage'
import HomePage from 'pages/HomePage'
import CustomersPage from 'pages/CustomersPage'
import NewCustomerPage from 'pages/NewCustomerPage'
import EditCustomerPage from 'pages/EditCustomerPage'
import LoginPage from 'pages/LoginPage'
import LogoutPage from 'pages/LogoutPage'
import RegisterPage from 'pages/RegisterPage'

import ProtectedRoute from './utils/ProtectedRoute'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/customers',
				element: <ProtectedRoute page={CustomersPage} role="auth" />,
			},
			{
				path: '/customer/new',
				element: <ProtectedRoute page={NewCustomerPage} role="admin" />,
			},
			{
				path: '/customer/edit/:customerId',
				element: <EditCustomerPage />,
			},
			{
				path: '/login',
				element: <ProtectedRoute page={LoginPage} role="anonymous" />,
			},
			{
				path: '/register',
				element: <ProtectedRoute page={RegisterPage} role="anonymous" />,
			},
			{
				path: '/logout',
				element: <ProtectedRoute page={LogoutPage} role="auth" />,
			},
		],
	},
])

export default router
