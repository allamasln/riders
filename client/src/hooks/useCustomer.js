import { useEffect, useState } from 'react'
import customerService from 'services/customer-service'

function useCustomer(customerId) {
	const [customer, setCustomer] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		customerService
			.getById(customerId)
			.then(({ data }) => setCustomer(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [customerId])

	return { customer, loading, errors, setCustomer }
}

export default useCustomer
