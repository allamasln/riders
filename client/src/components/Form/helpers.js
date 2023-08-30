import _ from 'lodash'

const transformData = (form) => {
	const formData = new FormData()

	for (let field in form) {
		if (form[field] instanceof File) {
			formData.append(field, form[field], form[field].name)
		} else if (_.isArray(form[field])) {
			form[field].forEach((i) => formData.append(`${field}[]`, i.value))
		} else if (_.isObject(form[field])) {
			formData.append(field, form[field].value)
		} else {
			if (form[field]) formData.append(field, form[field])
		}
	}

	return formData
}

export { transformData }
