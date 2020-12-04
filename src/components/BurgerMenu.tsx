import Link from 'next/link'
import {useState} from 'react'
import {FiUser} from 'react-icons/fi'
import {GoTriangleRight} from 'react-icons/go'

import Container from '../styles/components/BurgerMenu'
import {Company} from './CompanyModal'

interface BurgerMenuProps
{
	isOpen: boolean
	width: number

	companies: Company[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isOpen, width, companies}) =>
{
	const [showBurgerDropdown, setShowBurgerDropdown] = useState(false)

	if (width > 1000)
		return null

	return (
		<Container isOpen={isOpen} showBurgerDropdown={showBurgerDropdown} >
			<ul>
				<div className="link group">
					<Link href="/">
						<a className="block">
							Fazer pedido
						</a>
					</Link>
					<Link href="/login">
						<a className="user">
							<FiUser size={30} color="#5e5d5d" />
						</a>
					</Link>
				</div>
				<Link href="/empresas">
					<a className="link">
						Empresas
					</a>
				</Link>
				<button
					onClick={() => setShowBurgerDropdown(!showBurgerDropdown)}
					className="link burguerDropdown"
				>
						<div className="header">
							<GoTriangleRight size={20} />
							Catálogo
						</div>
						{showBurgerDropdown && (
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
			</ul>
		</Container>
	)
}

export default BurgerMenu