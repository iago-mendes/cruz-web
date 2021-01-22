import Link from 'next/link'
import {useRouter} from 'next/router'
import {FiMenu, FiX} from 'react-icons/fi'
import {BsFillTriangleFill} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import useSWR from 'swr'

import logo from '../assets/logo.svg'
import {useEffect, useState} from 'react'
import Container from '../styles/components/Menu'
import {Company} from '../components/CompanyModal'
import BurgerMenu from './BurgerMenu'
import UserMenu from './modals/userMenu'
import useUser from '../hooks/useUser'

export default function MenuTabs()
{
	const router = useRouter()
	const {user} = useUser()

	const [width, setWidth] = useState(1500)
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)
	const {data: companies, error} = useSWR('/api/getCompanies')

	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
	
	useEffect(() =>
	{
		setWidth(window.innerWidth)
		window.addEventListener("resize", () => setWidth(window.innerWidth))

		return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
	}, [])

	if (router.pathname === '/login') return null
	if (error) return <h1>Error!</h1>

	return (
		<Container
			showDropdown={showDropdown}
			isUserMenuOpen={isUserMenuOpen}
			id='menu'
		>
			<UserMenu
				isOpen={isUserMenuOpen}
				setIsOpen={setIsUserMenuOpen}
			/>

			{isBurgerOpen && <BurgerMenu setIsOpen={setIsBurgerOpen} companies={companies} />}
			<Link href="/">
				<img src={logo} alt="Cruz Representações" className='logo' />
			</Link>
			{
				width < 1000
				? isBurgerOpen
					? (
						<button onClick={() => setIsBurgerOpen(false)}>
							<FiX size={30} />
						</button>
					)
					: (
						<button onClick={() => setIsBurgerOpen(true)}>
							<FiMenu size={30} />
						</button>
					)
				: (
					<ul>
						<Link href="/empresas">
								<a className="link">
										Empresas
								</a>
						</Link>
						<button
							onMouseEnter={() => setShowDropdown(true)}
							onMouseLeave={() => setShowDropdown(false)}
							className="dropdown"
						>
								Catálogo
								{showDropdown && (
									<ul>
										{companies && companies.map((company: Company) => (
											<Link href={`/catalogo/${company.id}`} key={company.id}>
												<a className="link">{company.nome_fantasia}</a>
											</Link>
										))}
									</ul>
								)}
						</button>
						<Link href="/contato">
								<a className="link">
										Contato
								</a>
						</Link>
						<Link href="/sobre">
								<a className="link">
										Sobre
								</a>
						</Link>
						<Link href="/">
								<a className="linkBlock">
										Fazer pedido
								</a>
						</Link>
						<div className='user'>
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
									<span onClick={() => router.push('/login')} >
										Entrar
									</span>
								)
							}
						</div>
					</ul>
				)
			}
		</Container>
	)
}