import Link from 'next/link'
import Container from '../styles/components/Footer'
import {FiFacebook, FiInstagram} from 'react-icons/fi'

import logo from '../assets/logo.svg'

const Footer: React.FC = () =>
{
	return (
		<Container>
			<Link href='/' >
				<img src={logo} alt='Cruz representações' className='logo' />
			</Link>

			<div className='links'>
				<div className='group'>
					<h3>Links do site</h3>
					<ul>
						<Link href='/' >
							<a className='link'>
								Página Principal
							</a>
						</Link>
						<Link href='/contato' >
							<a className='link'>
								Contato
							</a>
						</Link>
						<Link href='/sobre' >
							<a className='link'>
								Sobre
							</a>
						</Link>
						<Link href='/sobre/politica-de-privacidade' >
							<a className='link'>
								Política de Privacidade
							</a>
						</Link>
					</ul>
				</div>
				<div className='group'>
					<h3>Redes sociais</h3>
					<ul>
						<a target='_blank' rel='nonreferrer' href='https://www.facebook.com/CruzRepresentacoes' className='social' >
							<FiFacebook size={25} />
							<span>@CruzRepresentacoes </span>
						</a>
						<a target='_blank' rel='nonreferrer' href='https://www.instagram.com/gilmar.cruzrepresentacoes/' className='social' >
							<FiInstagram size={25} />
							<span>@gilmar.cruzrepresentacoes</span>
						</a>
					</ul>
				</div>
			</div>
		</Container>
	)
}

export default Footer