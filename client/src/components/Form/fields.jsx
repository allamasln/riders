import { useState } from 'react'

import { FormControl, TextField, Box, Stack } from '@mui/material'

import { useDropzone } from 'react-dropzone'

const InputField = ({ name, errors, value, ...rest }) => {
	return (
		<FormControl>
			<TextField
				error={errors}
				helperText={errors?.message}
				id={name}
				{...rest}
				value={value || ''}
				variant="standard"
			/>
		</FormControl>
	)
}

// const FileField = ({
// 	name,
// 	label,
// 	errors,
// 	onChange,
// 	value,
// 	setValue,
// 	clearErrors,
// 	...rest
// }) => {
// 	const [preview, setPreview] = useState(value)

// 	const { getRootProps, getInputProps, isDragActive, isDragReject } =
// 		useDropzone({
// 			multiple: false,
// 			accept: {
// 				'image/jpeg': ['.jpeg', '.jpg'],
// 				'image/png': ['.png'],
// 			},
// 			onDropAccepted: function (acceptedFiles) {
// 				setPreview(URL.createObjectURL(acceptedFiles[0]))
// 				setValue(name, acceptedFiles[0])
// 				clearErrors(name)
// 			},
// 		})

// 	return (
// 		<FieldWrapper errors={errors} name={name} label={label}>
// 			<Stack direction="row">
// 				<Box
// 					{...getRootProps()}
// 					lineHeight="100px"
// 					border={'1px dashed ' + (errors ? 'red' : 'gray')}
// 					w="100%"
// 				>
// 					<Input
// 						id={name}
// 						{...rest}
// 						{...getInputProps()}
// 						value={value?.filename}
// 						onChange={(e) => {
// 							onChange(e.target.files[0])
// 						}}
// 					/>

// 					<Text align="center" color="gray" fontSize="2rem">
// 						{!isDragActive
// 							? '+'
// 							: isDragReject
// 							? 'Bad type file'
// 							: 'Drop here...'}
// 					</Text>
// 				</Box>
// 				{preview && <Image src={preview} h="100px" width="30%" fit="cover" />}
// 			</Stack>
// 		</FieldWrapper>
// 	)
// }

export default { input: InputField }
