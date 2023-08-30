import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography, TableCell, Paper } from '@mui/material'
import { Add, Search, Edit, Delete } from '@mui/icons-material'

import { Dialog, IconButton, Table, TableRow } from '../components'

function HomePage() {
	const customers = [
		{
			_id: '123123',
			name: 'Cocacola',
			logo: 'https://ams3.digitaloceanspaces.com/graffica/2023/02/cocacola-logo.jpeg',
		},
	]
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h2" component="h2">
					Customers
				</Typography>

				<Button
					variant="contained"
					color="secondary"
					startIcon={<Add />}
					component={Link}
					to="/customer/new"
				>
					New Customer
				</Button>
			</Stack>

			<Table>
				{customers.map((workday) => (
					<TableRow key={workday._id}>
						<TableCell component="th" scope="row" size="small" width="100px">
							<Paper
								variant="outlined"
								sx={{
									img: {
										height: '100px',
										Width: '30%',
										fit: 'cover',
									},
								}}
							>
								<img src={workday.logo} />
							</Paper>
						</TableCell>
						<TableCell align="left" size="small">
							{workday.name}
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
