import { Outlet } from 'react-router-dom'

import { Container, Stack } from '@mui/material'

import { Navbar } from 'components'
import { ToastContainer } from 'react-toastify'
function RootLayout() {
	// const paddingX = useMediaQuery(theme.breakpoints.up('md')) ? '80px' : '16px'
	// const gap = useMediaQuery(theme.breakpoints.up('md')) ? '48px' : '24px'

	// const paddingX = useBreakpointValue({ base: '16px', md: '80px' })
	// const gap = useBreakpointValue({ base: '24px', md: '48px' })

	return (
		<Container display="flex" maxWidth="xxl" disableGutters>
			<Navbar />

			<Container maxWidth="xl" sx={{ mt: 5 }}>
				<Outlet />
			</Container>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</Container>
	)
}
export default RootLayout
