import _ from 'lodash'

const transformData = (form) => {
	const formData = new FormData()

	let hasFile = false

	for (let field in form) {
		if (form[field] instanceof File) {
			hasFile = true

			console.log(form[field])
			formData.append(field, form[field], form[field].name)
		} else if (form[field] instanceof Date) {
			formData.append(field, form[field].toLocal)
		} else if (_.isArray(form[field])) {
			form[field].forEach((value) => {
				formData.append(`${field}[]`, value)
			})
		} else if (_.isObject(form[field])) {
			formData.append(field, form[field].value)
		} else {
			if (form[field]) formData.append(field, form[field])
		}
	}

	return hasFile ? formData : form
}

export { transformData }
