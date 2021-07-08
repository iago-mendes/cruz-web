import Skeleton from 'react-loading-skeleton';

import Container from '../styles/pages/cliente'
import {useAuth} from '../hooks/useAuth'
import { useEffect, useState } from 'react';
import api from '../services/api';
import ClientInterface from '../models/client';
import Dropzone from '../components/Dropzone';
import PasswordModal from '../components/modals/Password';
import errorAlert from '../utils/alerts/error';
import LoadingModal from '../components/modals/Loading';
import sucessAlert from '../utils/alerts/sucess';
import SEOHead from '../components/SEOHead';

const Client: React.FC = () =>
{
	const {user} = useAuth()

	const [userDetails, setUserDetails] = useState<ClientInterface>(null)
	const [showPasswordModal, setShowPasswordModal] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() =>
	{
		if (user)
			api.get(`clients/${user.id}`)
			.then(({data}:{data: ClientInterface}) =>
			{
				setUserDetails(data)
			})
			.catch(err =>
			{
				console.log('[message]', err.response.data.message)
			})
	}, [user])

	function useUserDataText(field: string)
	{
		if (user.data)
			return <span>{String(user.data[field])}</span>
		else
			return <Skeleton />
	}

	function useUserDetailsText(field: string)
	{
		if (userDetails !== null)
			return <span>{userDetails[field]}</span>
		else
			return <Skeleton />
	}

	function updateImage(file: File)
	{
		const data = new FormData()
		data.append('imagem', file)

		setLoading(true)
		api.put(`clients/${user.id}`, data)
			.then(() =>
			{
				setLoading(false)
				sucessAlert('Imagem atualizada com sucesso!')
			})
			.catch(error =>
			{
				setLoading(false)
				errorAlert(error.response.data.message)
			})
	}

	return (
		<Container className='page' >
			<SEOHead
				title='Minha conta | Cruz Representações'
			/>

			<PasswordModal
				isOpen={showPasswordModal}
				setIsOpen={setShowPasswordModal}
			/>

			<LoadingModal
				isOpen={loading}
			/>

			<header>
				<div className='img'>
					<Dropzone
						onFileUploaded={updateImage}
						shownFileUrl={user.data && user.data.image}
					/>
				</div>

				<div className='group'>
					<div className='info'>
						<h3>Nome Fantasia</h3>
						{useUserDataText('name')}
					</div>
					<div className='info'>
						<h3>Razão Social</h3>
						{useUserDetailsText('razao_social')}
					</div>
				</div>
			</header>

			<main>
				<div className='info'>
					<h3>E-mail</h3>
					{useUserDataText('email')}
				</div>
				<div className='info'>
					<h3>Senha</h3>
					<button className='password' onClick={() => setShowPasswordModal(true)} >
						Atualizar senha
					</button>
				</div>
				<div className='info'>
					<h3>CNPJ</h3>
					{useUserDetailsText('cnpj')}
				</div>
				<div className='info'>
					<h3>Inscrição Estadual</h3>
					{useUserDetailsText('insc_estadual')}
				</div>
				<div className='info'>
					<h3>Telefone</h3>
					{useUserDetailsText('telefone')}
				</div>
			</main>
		</Container>
	)
}

export default Client