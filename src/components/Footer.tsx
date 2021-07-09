import Link from 'next/link'
import Container from '../styles/components/Footer'
import {FiFacebook, FiInstagram} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import {useRouter} from 'next/router'

import logo from '../assets/images/logo.svg'

const Footer: React.FC = () => {
	const {pathname} = useRouter()

	if (pathname === '/login') return null

	return (
		<Container>
			<Link href="/">
				<img src={logo} alt="Cruz representações" className="logo" />
			</Link>

			<div className="links">
				<div className="group">
					<h3>Links úteis</h3>
					<ul>
						<Link href="/">
							<a className="link">Página Principal</a>
						</Link>
						<Link href="/contato">
							<a className="link">Contato</a>
						</Link>
						<Link href="/sobre">
							<a className="link">Sobre</a>
						</Link>
						{/* <Link href='/sobre/politica-de-privacidade' >
							<a className='link'>
								Política de Privacidade
							</a>
						</Link> */}
					</ul>
				</div>
				<div className="group">
					<h3>Redes sociais</h3>
					<ul>
						<a
							target="_blank"
							rel="nonreferrer noreferrer"
							href="https://wa.me/5538999856208"
							className="social"
						>
							<FaWhatsapp size={25} />
							<span>(38) 9 9985-6208 (Comercial) </span>
						</a>
						<a
							target="_blank"
							rel="nonreferrer noreferrer"
							href="https://wa.me/5538999866208"
							className="social"
						>
							<FaWhatsapp size={25} />
							<span>(38) 9 9986-6208 (Admnistrativo) </span>
						</a>
						<a
							target="_blank"
							rel="nonreferrer noreferrer"
							href="https://www.facebook.com/CruzRepresentacoes"
							className="social"
						>
							<FiFacebook size={25} />
							<span>@CruzRepresentacoes </span>
						</a>
						<a
							target="_blank"
							rel="nonreferrer noreferrer"
							href="https://www.instagram.com/cruz_representacoes"
							className="social"
						>
							<FiInstagram size={25} />
							<span>cruz_representacoes</span>
						</a>
					</ul>
				</div>
			</div>
		</Container>
	)
}

export default Footer
