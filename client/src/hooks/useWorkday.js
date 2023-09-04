import { useEffect, useState } from 'react'
import workdayService from 'services/workday-service'

function useWorkday(workdayId) {
	const [workday, setWorkday] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		workdayService
			.getById(workdayId)
			.then(({ data }) => setWorkday(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [workdayId])

	return { workday, loading, errors, setWorkday }
}

export default useWorkday
