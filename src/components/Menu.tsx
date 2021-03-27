import Link from 'next/link'
import {useRouter} from 'next/router'
import {FiMenu, FiX} from 'react-icons/fi'
import {BsFillTriangleFill} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import useSWR from 'swr'
import {motion} from 'framer-motion'

import logo from '../assets/logo.svg'
import {useState} from 'react'
import Container from '../styles/components/Menu'
import Company from '../models/company'
import BurgerMenu from './modals/BurgerMenu'
import UserMenu from './modals/UserMenu'
import useUser from '../hooks/useUser'
import useDimensions from '../hooks/useDimensions'
import useClickOutside from '../hooks/useClickOutside'

export default function MenuTabs()
{
	const router = useRouter()
	const {user} = useUser()
	const {inMobile, inDesktop} = useDimensions()
	
	const [showDropdown, setShowDropdown] = useState(false)
	const {data: companies} = useSWR('/api/getCompanies')
	
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
	const userRef = useClickOutside(() => setIsUserMenuOpen(false))
	
	if (['/login', '/pedidos/novo'].includes(router.pathname))
		return null

	return (
		<Container
			showDropdown={showDropdown}
			isUserMenuOpen={isUserMenuOpen}
			id='menu'
		>
			<BurgerMenu
				isOpen={isBurgerOpen}
				setIsOpen={setIsBurgerOpen}
				companies={companies}
			/>

			{inMobile && (
				<button onClick={() => setIsBurgerOpen(!isBurgerOpen)} className='burger' >
				{
					isBurgerOpen
					? <FiX size={30} />
					: <FiMenu size={30} />
				}
				</button>
			)}

			<Link href='/'>
				<img src={logo} alt='Cruz Representações' className='logo' />
			</Link>

			<nav>
				{inDesktop && (
						<ul>
							<Link href='/empresas'>
								<a className='link'>
									Empresas
								</a>
							</Link>
							<div
								onMouseEnter={() => setShowDropdown(true)}
								onMouseLeave={() => setShowDropdown(false)}
								className='dropdown'
							>
									<div className='group'>
										<BsFillTriangleFill size={10} className='indicator' />
										<span className='link' >Catálogo</span>
									</div>
									<motion.ul
										initial={false}
										transition={{duration: 0.25}}
										animate={showDropdown ? 'open' : 'closed'}
										variants=
										{{
											open:
											{
												height: 'fit-content',
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
											top: '7.5rem',
											zIndex: 100,
							
											overflow: 'hidden'
										}}
									>
										{(companies && user.id !== 'not-logged') && companies.map((company: Company) => (
											<Link href={`/catalogo/${company.id}`} key={company.id}>
												<a className='link'>{company.nome_fantasia}</a>
											</Link>
										))}
									</motion.ul>
							</div>
							<Link href='/contato'>
								<a className='link'>
									Contato
								</a>
							</Link>
							<Link href='/sobre'>
								<a className='link'>
									Sobre
								</a>
							</Link>
							<Link href='/pedidos/novo'>
								<a className='linkBlock'>
									Fazer pedido
								</a>
							</Link>
						</ul>
					)
				}
				<div className='user'
					ref={userRef}
				>
					{
						user.id !== 'not-logged'
						? (
							<button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} >
								{
									user.data
									? <img src={user.data.image} alt={user.data.name} className='img' />
									: <BiUserCircle size={35} className='img' />
								}
								<BsFillTriangleFill size={10} className='indicator' />
							</button>
						)
						: (
							<span onClick={() => router.push('/login')} className='linkBlock' >
								Entrar
							</span>
						)
					}
					<UserMenu
						isOpen={isUserMenuOpen}
						setIsOpen={setIsUserMenuOpen}
					/>
				</div>
			</nav>
		</Container>
	)
}