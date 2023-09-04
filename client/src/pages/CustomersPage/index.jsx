import * as React from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {
	Button,
	Stack,
	Typography,
	TableCell,
	Paper,
	CircularProgress,
} from '@mui/material'
import { Add, Search, Edit, Delete } from '@mui/icons-material'

import { Dialog, IconButton, Table, TableRow } from 'components'

import { useCustomers } from 'hooks'

import customerService from '../../services/customer-service'

function CustomerPage() {
	const { customers, loading, setCustomers } = useCustomers()

	const [openedId, setOpenedId] = React.useState('')

	const handleClickOpen = (customerId) => setOpenedId(customerId)
	const handleClose = () => setOpenedId('')

	const handleDelete = () => {
		customerService.delete(openedId).then(() => {
			setCustomers(customers.filter((customer) => customer._id !== openedId))
			toast.success('Registro borrado con éxito')
			setOpenedId('')
		})
	}

	if (loading) return <CircularProgress />

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
				{customers.map((customer) => (
					<TableRow key={customer._id}>
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
								<img src={customer.logo} />
							</Paper>
						</TableCell>
						<TableCell align="left" size="small">
							{customer.name}
						</TableCell>

						<TableCell align="right">
							<IconButton icon={Search} tooltip="Open workday" />

							<Link to={'/customer/edit/' + customer._id}>
								<IconButton
									color="secondary"
									icon={Edit}
									tooltip="Update workday"
								/>
							</Link>

							<IconButton
								color="error"
								onClick={() => handleClickOpen(customer._id)}
								icon={Delete}
								tooltip="Delete workday"
							/>
						</TableCell>
					</TableRow>
				))}
			</Table>

			<Dialog
				onClose={handleClose}
				onDelete={handleDelete}
				open={Boolean(openedId)}
			/>
		</Stack>
	)
}
export default CustomerPage
