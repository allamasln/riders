import * as React from 'react'

import { Stack, Typography } from '@mui/material'

function NewWorkdayPage() {
	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h2" component="h2">
					New Workday
				</Typography>
			</Stack>
		</Stack>
	)
}
export default NewWorkdayPage
