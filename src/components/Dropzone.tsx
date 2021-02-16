import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import {FiUpload} from 'react-icons/fi'

import Container from '../styles/components/Dropzone'

interface DropzoneProps
{
	shownFileUrl?: string
	onFileUploaded: (file: File) => void

	name?: string
	id?: string
}

const Dropzone: React.FC<DropzoneProps> = ({shownFileUrl, onFileUploaded, name, id}) =>
{
	const [selectedFileUrl, setSelectedFileUrl] = useState('')

	useEffect(() =>
	{
		if (shownFileUrl)
			setSelectedFileUrl(shownFileUrl)
	}, [shownFileUrl])

	const onDrop = useCallback(acceptedFiles =>
	{
		const file = acceptedFiles[0]
		const fileUrl = URL.createObjectURL(file)
		setSelectedFileUrl(fileUrl)
		onFileUploaded(file)
	}, [onFileUploaded])

	const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'})

return (
	<Container
		{...getRootProps()}
		title='Selecione uma imagem'
	>
		<input {...getInputProps()} accept='image/*' name={name} id={id} />
		{
			selectedFileUrl !== ''
			? <img src={selectedFileUrl} alt='Image thumbnail' />
			: (
				<p>
					<FiUpload />
					Selecione uma imagem
				</p>
			)
		}
	</Container>
)
}

export default Dropzone