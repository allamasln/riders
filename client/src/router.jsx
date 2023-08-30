import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import CustomersPage from './pages/CustomersPage'
import NewWorkdayPage from './pages/NewWorkDayPage'
import NewCustomerPage from './pages/NewCustomerPage'

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
				path: '/workday/new',
				element: <NewWorkdayPage />,
			},
			{
				path: '/customer/new',
				element: <NewCustomerPage />,
			},
			{
				path: '/customers',
				element: <CustomersPage />,
			},
		],
	},
])

export default router
