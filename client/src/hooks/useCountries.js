import { useEffect, useState } from 'react'
import countryService from '../services/country-service'

function useCountries() {
	const [countries, setCountries] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		countryService
			.getAll()
			.then(({ data }) => setCountries(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [])

	return { countries, loading, errors, setCountries }
}

export default useCountries
