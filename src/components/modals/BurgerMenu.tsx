import Link from 'next/link'
import {useEffect, useState} from 'react'
import {BsFillTriangleFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'

import Container from '../../styles/components/modals/BurgerMenu'
import Company from '../../models/company'
import useUser from '../../hooks/useUser'

interface BurgerMenuProps
{
	isOpen: boolean
	setIsOpen: Function

	companies: Company[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isOpen, setIsOpen, companies}) =>
{
	const {user} = useUser()
	const {push, pathname} = useRouter()

	const [showCatalogDropdown, setShowCatalogDropdown] = useState(false)

	useEffect(() =>
	{
		setIsOpen(false)
	}, [pathname])

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
				position: 'fixed',
				top: '7.5rem',
				left: 0,
				zIndex: 100,

				height: 'calc(100vh - 7.5rem)',
				overflowY: 'auto',
				boxShadow: '5px 5px 5px rgba(0,0, 0, 0.5)',
			}}
		>
			<Container showCatalogDropdown={showCatalogDropdown} >
				<Link href='/pedidos/novo'>
					<a className='linkBlock' onClick={() => setIsOpen(false)} >
						Fazer pedido
					</a>
				</Link>
				<Link href='/empresas'>
					<a className='link row' onClick={() => setIsOpen(false)} >
						Empresas
					</a>
				</Link>
				<div
					onMouseEnter={() => setShowCatalogDropdown(true)}
					onMouseLeave={() => setShowCatalogDropdown(false)}
					className='dropdown row'
				>
					<div className='group' onClick={() => setShowCatalogDropdown(!showCatalogDropdown)} >
						<BsFillTriangleFill size={10} className='indicator' />
						<span className='link' >Catálogo</span>
					</div>
					{showCatalogDropdown && (
						<ul>
							{companies && companies.map((company: Company) => (
								<Link href={`/catalogo/${company.id}`} key={company.id}>
									<a className='link' onClick={() => setIsOpen(false)} >
										{company.nome_fantasia}
									</a>
								</Link>
							))}
						</ul>
					)}
				</div>
				<Link href='/contato'>
					<a className='link row' onClick={() => setIsOpen(false)} >
							Contato
					</a>
				</Link>
				<Link href='/sobre'>
					<a className='link row' onClick={() => setIsOpen(false)} >
						Sobre
					</a>
				</Link>
			</Container>
		</motion.div>
	)
}

export default BurgerMenu