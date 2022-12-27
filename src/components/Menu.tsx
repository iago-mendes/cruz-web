import Link from 'next/link'
import {useRouter} from 'next/router'
import {FiMenu, FiX} from 'react-icons/fi'
import {BsFillTriangleFill} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import {motion} from 'framer-motion'

import logo from '../assets/images/logo.svg'
import {useEffect, useState} from 'react'
import Container, {BurgerMenu} from '../styles/components/Menu'
import {CompanyListed} from '../models/company'
import UserMenu from './modals/UserMenu'
import {useAuth} from '../hooks/useAuth'
import useDimensions from '../hooks/useDimensions'
import useClickOutside from '../hooks/useClickOutside'
import api from '../services/api'

const Menu: React.FC = () => {
	const {pathname, push} = useRouter()
	const {user} = useAuth()
	const {inMobile, inDesktop} = useDimensions()

	const [showDropdown, setShowDropdown] = useState(false)

	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
	const userRef = useClickOutside(() => setIsUserMenuOpen(false))
	const burgerMenuRef = useClickOutside(() => setIsBurgerOpen(false))

	useEffect(() => {
		setIsBurgerOpen(false)
	}, [pathname])

	if (['/login', '/pedidos/novo'].includes(pathname)) return null

	return (
		<Container
			showDropdown={showDropdown}
			isUserMenuOpen={isUserMenuOpen}
			id="menu"
		>
			{inMobile && (
				<>
					<button className="controller" onClick={() => setIsBurgerOpen(true)}>
						<FiMenu />
					</button>

					<BurgerMenu isOpen={isBurgerOpen} ref={burgerMenuRef}>
						<button
							className="controller"
							onClick={() => setIsBurgerOpen(false)}
						>
							<FiX />
						</button>

						<RoutesOptions
							showDropdown={showDropdown}
							setShowDropdown={setShowDropdown}
						/>
					</BurgerMenu>
				</>
			)}

			{inDesktop && (
				<Link href="/" legacyBehavior>
					<img src={logo} alt="Cruz Representações" className="logo" />
				</Link>
			)}

			<nav>
				{inDesktop && (
					<RoutesOptions
						showDropdown={showDropdown}
						setShowDropdown={setShowDropdown}
					/>
				)}

				<div className="user" ref={userRef}>
					{user ? (
						<button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
							{user.data ? (
								<img
									src={user.data.image}
									alt={user.data.name}
									className="img"
								/>
							) : (
								<BiUserCircle size={35} className="img" />
							)}
							<BsFillTriangleFill size={10} className="indicator" />
						</button>
					) : (
						<span onClick={() => push('/login')} className="linkBlock">
							Entrar
						</span>
					)}
					<UserMenu isOpen={isUserMenuOpen} setIsOpen={setIsUserMenuOpen} />
				</div>
			</nav>
		</Container>
	)
}

type RoutesOptionsProps = {
	showDropdown: boolean
	setShowDropdown: (showDropdown: boolean) => void
}

const RoutesOptions: React.FC<RoutesOptionsProps> = ({
	showDropdown,
	setShowDropdown
}) => {
	const [companies, setCompanies] = useState<CompanyListed[]>([])
	const {inMobile} = useDimensions()

	useEffect(() => {
		api
			.get('companies')
			.then(({data}: {data: CompanyListed[]}) => setCompanies(data))
	}, [])

	return (
		<ul>
			<Link href="/pedidos/novo" className="linkBlock">
				Fazer pedido
			</Link>
			<Link href="/empresas" className="link">
				Empresas
			</Link>
			<div
				onMouseEnter={() => setShowDropdown(true)}
				onMouseLeave={() => setShowDropdown(false)}
				className="dropdown"
			>
				<div className="group">
					<BsFillTriangleFill size={10} className="indicator" />
					<span className="link">Catálogo</span>
				</div>
				<motion.ul
					initial={false}
					transition={{duration: 0.25}}
					animate={showDropdown ? 'open' : 'closed'}
					variants={{
						open: {
							height: 'fit-content',
							opacity: 1
						},
						closed: {
							height: 0,
							opacity: 0
						}
					}}
					style={{
						position: 'absolute',
						top: inMobile ? '1.75rem' : '7.5rem',
						zIndex: 100,

						overflow: 'hidden'
					}}
				>
					{companies &&
						companies.map((company: CompanyListed) => (
							<Link
								href={`/catalogo/${company.id}`}
								key={company.id}
								className="link"
							>
								{company.nome_fantasia}
							</Link>
						))}
				</motion.ul>
			</div>
			<Link href="/contato" className="link">
				Contato
			</Link>
			<Link href="/sobre" className="link">
				Sobre
			</Link>
		</ul>
	)
}

export default Menu
