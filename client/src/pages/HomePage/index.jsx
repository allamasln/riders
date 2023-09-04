import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button, Stack, Typography, TableCell } from '@mui/material'
import { Add, Search, Edit, Delete } from '@mui/icons-material'
import pluralize from 'pluralize'
import { Dialog, IconButton, Table, TableRow } from 'components'

import { useWorkdays } from '../../hooks'
import { useAuth } from '../../hooks/auth'

function HomePage() {
	const [user] = useAuth()
	const { workdays } = useWorkdays()

	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleLogout = () => {
		dispatch({
			type: 'logout',
		})
	}

	const handleLogin = () => {
		dispatch({
			type: 'login',
			payload: {
				isAdmin: true,
				username: 'Ana',
			},
		})
	}

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h2" component="h2">
					Workdays {user.auth && 'y buenas tardes ' + user.username}
				</Typography>

				{user.auth ? (
					<Button
						onClick={handleLogout}
						variant="contained"
						color="secondary"
						startIcon={<Add />}
					>
						LOGOUT
					</Button>
				) : (
					<Button
						onClick={handleLogin}
						variant="contained"
						color="secondary"
						startIcon={<Add />}
					>
						LOGUEAR
					</Button>
				)}

				<Button
					variant="contained"
					color="secondary"
					startIcon={<Add />}
					component={Link}
					to="/workday/new"
				>
					New Workday
				</Button>
			</Stack>

			<Table>
				{workdays.map((workday) => (
					<TableRow key={workday._id}>
						<TableCell component="th" scope="row" size="small" width="100px">
							{workday.date}
						</TableCell>
						<TableCell align="left" size="small">
							{workday.visits.length}{' '}
							{pluralize('Customer', workday.visits.length)}
						</TableCell>

						<TableCell align="right">
							<IconButton icon={Search} tooltip="Open workday" />

							<IconButton
								color="secondary"
								icon={Edit}
								tooltip="Update workday"
							/>

							<IconButton
								color="error"
								onClick={handleClickOpen}
								icon={Delete}
								tooltip="Delete workday"
							/>
						</TableCell>
					</TableRow>
				))}
			</Table>

			<Dialog
				onClose={handleClose}
				onDelete={() => console.log('s')}
				open={open}
			/>
		</Stack>
	)
}
export default HomePage
