import Modal from 'react-modal'
import {BsFillTriangleFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {signOut} from 'next-auth/client'

import Container, {modalStyle} from '../../styles/components/modals/userMenu'
import useUser from '../../hooks/useUser'
import Link from 'next/link'

Modal.setAppElement('#__next')

interface UserMenuProps
{
	isOpen: boolean
	setIsOpen: Function
}

const UserMenu: React.FC<UserMenuProps> = ({isOpen, setIsOpen}) =>
{
	const {user} = useUser()

	function handleSignOut()
	{
		setIsOpen(false)
		signOut()
	}

	if (!user)
		return null

	return (
		<Modal
			isOpen={isOpen}
			style={modalStyle}
		>
			<Container
				onMouseLeave={() => setIsOpen(false)}
			>
				<div className='detail'>
					<BsFillTriangleFill size={10} />
				</div>
				<main>
					<div className='session'>
						<p>Conectado como <strong>{user.id}</strong></p>
						<button onClick={handleSignOut} >
							<FiLogOut size={20} />
							<span>Sair</span>
						</button>
					</div>
					<div className='links'>
						<Link href='/user'>
							Minha conta
						</Link>
					</div>
				</main>
			</Container>
		</Modal>
	)
}

export default UserMenu