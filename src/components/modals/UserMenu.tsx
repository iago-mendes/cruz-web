import {BsFillTriangleFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {signOut} from 'next-auth/client'
import {motion} from 'framer-motion'

import Container from '../../styles/components/modals/UserMenu'
import useUser from '../../hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface UserMenuProps
{
	isOpen: boolean
	setIsOpen: Function
}

const UserMenu: React.FC<UserMenuProps> = ({isOpen, setIsOpen}) =>
{
	const {user} = useUser()
	const {pathname} = useRouter()

	useEffect(() =>
	{
		setIsOpen(false)
	}, [pathname])

	function handleSignOut()
	{
		setIsOpen(false)
		signOut()
	}

	if (!user)
		return null

	return (
		<motion.div
			initial={false}
			transition={{duration: 0.25}}
			animate={isOpen ? 'open' : 'closed'}
			variants=
			{{
				open:
				{
					height: '20rem',
					opacity: 1,
				},
				closed:
				{
					height: 0,
					opacity: 0,
				}
			}}
			style=
			{{
				position: 'absolute',
				right: 0,
				top: '5rem',
				zIndex: 100,

				overflow: 'hidden',
				padding: '1rem',
				paddingTop: 0,
			}}
		>
			<Container>
				<div className='detail'>
					<BsFillTriangleFill size={10} />
				</div>
				<main>
					<div className='session'>
						{
							user.data && (
								<p>Conectado como <strong>{user.data.name}</strong></p>
							)
						}
						<button onClick={handleSignOut} >
							<FiLogOut size={20} />
							<span>Sair</span>
						</button>
					</div>
					<div className='links'>
						<Link href='/cliente'>
							Minha conta
						</Link>
						<Link href='/pedidos'>
							Meus pedidos
						</Link>
					</div>
				</main>
			</Container>
		</motion.div>
	)
}

export default UserMenu