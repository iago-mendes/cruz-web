import Link from 'next/link'
import {useRouter} from 'next/router'
import {FiUser, FiMenu, FiX} from 'react-icons/fi'
import useSWR from 'swr'

import logo from '../assets/logo.svg'
import {useEffect, useState} from 'react'
import Container from '../styles/components/Menu'
import {Company} from '../components/CompanyModal'
import api from '../services/api'

export default function MenuTabs()
{
	const Router = useRouter()

	const [width, setWidth] = useState(1500)
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	// const [companies, setCompanies] = useState<string[]>([])
	const {data: companies, error} = useSWR('/api/getCompanies')
	
	useEffect(() =>
	{
		setWidth(window.innerWidth)
		window.addEventListener("resize", () => setWidth(window.innerWidth))
		// api.get('companies').then(res =>
		// {
		// 	console.log('[companies]', res.data)
		// 	// let tmpCompanies: string[] = []
		// 	// const promise = res.data.map(company => tmpCompanies.push(company.nome_fantasia))
		// 	// await Promise.all(promise)
		// 	// setCompanies(tmpCompanies)
		// }).catch(err => console.error('[ERROR]', err))

		return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
	}, [])

	if (Router.pathname === '/login') return null
	if (error) return <h1>Error!</h1>

	return (
		<Container>
			<Link href="/">
				<img src={logo} alt="Cruz Representações" />
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
						<Link href="/catalogo">
								<a className="link dropdown">
										Catálogo
										<ul>
											{companies && companies.map((company: Company) => (
												<li key={company.id}>{company.nome_fantasia}</li>
											))}
										</ul>
								</a>
						</Link>
						<Link href="/contato">
								<a className="link">
										Contato
								</a>
						</Link>
						<Link href="/">
								<a className="link">
										Sobre
								</a>
						</Link>
						<Link href="/">
								<a className="linkBlock">
										Fazer pedido
								</a>
						</Link>
						<Link href="/login">
								<a className="linkUser">
										<FiUser size={30} color="#5e5d5d" />
								</a>
						</Link>
					</ul>
				)
			}
		</Container>
	)
}