import Link from 'next/link'
import {useRouter} from 'next/router'

import { FiUser, FiMenu, FiX } from 'react-icons/fi'

import logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'

export default function MenuTabs()
{
		const Router = useRouter()

		const [width, setWidth] = useState(1500)
		const [isBurgerOpen, setIsBurgerOpen] = useState(false)
		
		useEffect(() =>
		{
			setWidth(window.innerWidth)
			window.addEventListener("resize", () => setWidth(window.innerWidth))
		}, [])

		if (Router.pathname === '/login') return null
		
		if (width < 1000) return (
			<div id="menu">
				<Link href="/">
					<img src={logo} alt="Cruz Representações" />
				</Link>
				{
					isBurgerOpen
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
				}
				{/* <div id="burger">
					<h1>Bla</h1>
				</div> */}
			</div>
		)

    return (
        <div id="menu">
            <Link href="/">
                <img src={logo} alt="Cruz Representações" />
            </Link>
            <ul>
                <Link href="/">
                    <a className="link">
                        Empresas
                    </a>
                </Link>
                <Link href="/">
                    <a className="link">
                        Catálogo
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
        </div>
    )
}