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

			<div className='info'>
				<div className='group'>
					<h3>Links do site</h3>
					<ul>
						<Link href='/' >Página Principal</Link>
						<Link href='/contato' >Contato</Link>
						<Link href='/sobre' >Sobre</Link>
						<Link href='/sobre/politica-de-privacidade' >Política de Privacidade</Link>
					</ul>
				</div>
				<div className='group'>
					<h3>Redes sociais</h3>
					<ul>
						<a target='_blank' rel='nonreferrer' href='https://www.instagram.com/gilmar.cruzrepresentacoes/' className='social' >
							<FiInstagram size={25} />
							<span>@gilmar.cruzrepresentacoes</span>
						</a>
						<a target='_blank' rel='nonreferrer' href='https://www.facebook.com/CruzRepresentacoes' className='social' >
							<FiFacebook size={25} />
							<span>@CruzRepresentacoes </span>
						</a>
					</ul>
				</div>
			</div>
		</Container>
	)
}

export default Footer