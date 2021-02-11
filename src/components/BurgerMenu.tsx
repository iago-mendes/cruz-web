import Link from 'next/link'
import {useState} from 'react'
import {FiUser} from 'react-icons/fi'
import {GoTriangleRight} from 'react-icons/go'
import {motion} from 'framer-motion'

import Container from '../styles/components/BurgerMenu'
import {Company} from './CompanyModal'

interface BurgerMenuProps
{
	isOpen: boolean
	setIsOpen: Function

	companies: Company[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isOpen, setIsOpen, companies}) =>
{
	const [showBurgerDropdown, setShowBurgerDropdown] = useState(false)

	return (
		<motion.div
			initial={false}
			transition={{duration: 0.25}}
			animate={isOpen ? 'open' : 'closed'}
			variants=
			{{
				open:
				{
					width: '90vw',
					opacity: 1,
				},
				closed:
				{
					width: 0,
					opacity: 0,
				}
			}}
			style=
			{{
				position: 'absolute',
				top: '7.5rem',
				right: 0,
				zIndex: 100,

				height: 'calc(100vh - 7.5rem)',
				overflowY: 'auto',
			}}
		>
			<Container showBurgerDropdown={showBurgerDropdown} >
				<ul>
					<div className="link group">
						<Link href="/">
							<a className="block" onClick={() => setIsOpen(false)} >
								Fazer pedido
							</a>
						</Link>
						<Link href="/login">
							<a className="user" onClick={() => setIsOpen(false)} >
								<FiUser size={30} color="#5e5d5d" />
							</a>
						</Link>
					</div>
					<Link href="/empresas">
						<a className="link" onClick={() => setIsOpen(false)} >
							Empresas
						</a>
					</Link>
					<button
						className="link burguerDropdown"
					>
							<div className="header" onClick={() => setShowBurgerDropdown(!showBurgerDropdown)}>
								<GoTriangleRight size={20} />
								Catálogo
							</div>
							{showBurgerDropdown && (
								<ul>
									{companies && companies.map((company: Company) => (
										<Link href={`/catalogo/${company.id}`} key={company.id}>
											<a className="link" onClick={() => setIsOpen(false)} >
												{company.nome_fantasia}
											</a>
										</Link>
									))}
								</ul>
							)}
					</button>
					<Link href="/contato">
							<a className="link" onClick={() => setIsOpen(false)} >
									Contato
							</a>
					</Link>
					<Link href="/sobre">
							<a className="link" onClick={() => setIsOpen(false)} >
									Sobre
							</a>
					</Link>
				</ul>
			</Container>
		</motion.div>
	)
}

export default BurgerMenu