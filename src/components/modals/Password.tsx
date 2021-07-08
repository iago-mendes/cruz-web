import {useState} from 'react'
import { FiEye, FiEyeOff, FiSend } from 'react-icons/fi'
import api from '../../services/api'

import Container from '../../styles/components/modals/Password'
import errorAlert from '../../utils/alerts/error'
import sucessAlert from '../../utils/alerts/sucess'
import warningAlert from '../../utils/alerts/warning'
import ModalContainer from './Container'
import LoadingModal from './Loading'
import {useAuth} from '../../hooks/useAuth'

interface PasswordModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void
}

const PasswordModal: React.FC<PasswordModalProps> = ({isOpen, setIsOpen}) =>
{
	const {user} = useAuth();
	const [inputType, setInputType] = useState('password')
	const [loading, setLoading] = useState(false)

	const [currentPwd, setCurrentPwd] = useState('')
	const [newPwd, setNewPwd] = useState('')
	const [newPwd2, setNewPwd2] = useState('')

	function toggleVisibility()
	{
		if (inputType === 'password')
			setInputType('text')
		if (inputType === 'text')
			setInputType('password')
	}

	function handleSubmit()
	{
		if (currentPwd === '' || newPwd === '' || newPwd2 === '')
			return warningAlert('Você precisa preencher todos os campos!')

		if (newPwd !== newPwd2)
			return warningAlert('A confirmação da senha não corresponde à senha!')

		if (!user.data)
			return errorAlert('Os dados da sua conta não foram encontrados.')
		
		const auth =
		{
			email: user.data.email,
			password: currentPwd
		}
		const changePwd =
		{
			senha: newPwd
		}
		
		setLoading(true)
		api.post('login/client', auth)
			.then(() =>
			{
				api.put(`change-password/client/${user.id}`, changePwd)
					.then(() =>
					{
						setLoading(false)
						setIsOpen(false)
						sucessAlert('Senha atualizada com sucesso!')
					})
					.catch(error =>
					{
						setLoading(false)
						errorAlert(error.response.data.message)
					})
			})
			.catch(error =>
			{
				setLoading(false)
				errorAlert(error.response.data.message)
			})
	}

	return (
		<ModalContainer
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<LoadingModal
				isOpen={loading}
			/>

			<Container>
				<button
					className='showPwd'
					title={inputType === 'password' ? 'Mostrar senhas' : 'Esconder senhas'}
					onClick={toggleVisibility}
				>
					{inputType === 'password' && <FiEye size={25} />}
					{inputType === 'text' && <FiEyeOff size={25} />}
					<span>
						{
							inputType === 'password'
							? 'Mostrar senhas'
							: 'Esconder senhas'
						}
					</span>
				</button>
				<form onSubmit={e => e.preventDefault()} >
					<div className='field'>
						<label htmlFor='current'>Senha atual</label>
						<input
							type={inputType}
							id='current'
							name='current'
							value={currentPwd}
							onChange={e => setCurrentPwd(e.target.value)}
						/>
					</div>
					<div className='field'>
						<label htmlFor='new'>Nova senha</label>
						<input
							type={inputType}
							id='new'
							name='new'
							value={newPwd}
							onChange={e => setNewPwd(e.target.value)}
						/>
					</div>
					<div className='field'>
						<label htmlFor='new2'>Confirme nova senha</label>
						<input
							type={inputType}
							id='new2'
							name='new2'
							value={newPwd2}
							onChange={e => setNewPwd2(e.target.value)}
						/>
					</div>
				</form>
				<button className='submit' onClick={handleSubmit} >
					<FiSend size={25} />
					<span>Confirmar</span>
				</button>
			</Container>
		</ModalContainer>
	)
}

export default PasswordModal