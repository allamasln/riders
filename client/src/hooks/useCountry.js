import { useEffect, useState } from 'react'
import countryService from '../services/country-service'

function useCountry(countryId) {
	const [country, setCountry] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		countryService
			.getById(countryId)
			.then(({ data }) => setCountry(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [countryId])

	return { country, loading, errors, setCountry }
}

export default useCountry
