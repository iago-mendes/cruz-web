import Head from 'next/head'
import {GetStaticProps} from 'next'
import {FiGithub, FiLinkedin} from 'react-icons/fi'

import Container from '../styles/pages/sobre'
import logo from '../assets/logo.svg'
import api from '../services/api'

interface AboutProps
{
	sellers: Array<
	{
		id: string
		imagem: string
		nome: string
		funcao: string
	}>
}

const About: React.FC<AboutProps> = ({sellers}) =>
{
	return (
		<Container className='container'>
			<Head>
				<title>Sobre | Cruz Representações</title>
			</Head>

			<main>
				<div className='cardGroup history'>
					<span>História</span>
					<img src={logo} alt='Cruz representações' />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa massa, cursus eget ultrices sed, laoreet non sapien. Mauris vitae pellentesque metus. Suspendisse scelerisque molestie felis, sit amet iaculis turpis. Quisque sagittis vehicula enim, vitae hendrerit magna ullamcorper vel. Quisque eu imperdiet tellus, sit amet porta tellus. Vestibulum vehicula facilisis justo, eu feugiat tortor placerat tincidunt. Aenean vitae est vitae neque venenatis semper. Mauris velit metus, volutpat et fringilla a, auctor eu massa. Suspendisse nec neque eget risus dapibus maximus et id metus. Aliquam vitae eleifend tellus. Etiam vel nisl vitae nisi pulvinar dignissim non in eros. </p>
				</div>

				<div className='cardGroup team'>
					<span>Equipe</span>
						{sellers.map(seller => seller.funcao !== 'Desenvolvedor' && (
							<div className="seller" key={seller.id}>
								<img src={seller.imagem} alt={seller.nome} />
								<div className="text">
									<h1>{seller.nome}</h1>
									<h2>{seller.funcao}</h2>
								</div>
							</div>
						))}
				</div>

				<div className='cardGroup site'>
					<span>Site</span>
					<div className="seller">
						<img
							src={sellers.find(seller => seller.funcao === 'Desenvolvedor').imagem}
							alt={sellers.find(seller => seller.funcao === 'Desenvolvedor').nome} />
						<div className="text">
							<h1>{sellers.find(seller => seller.funcao === 'Desenvolvedor').nome}</h1>
							<h2>{sellers.find(seller => seller.funcao === 'Desenvolvedor').funcao}</h2>
						</div>
						<div className="links">
							<a href='https://github.com/iago-mendes' target='_blank' className='github' title='GitHub'>
								<FiGithub size={30} />
							</a>
							<a href='https://www.linkedin.com/in/iago-mendes-21a2361a2/' target='_blank' className='linkedin' title='LinkedIn'>
								<FiLinkedin size={30} />
							</a>
						</div>
					</div>
				</div>
			</main>

		</Container>
	)	
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	let sellers = []
	await api.get('sellers').then(res => sellers = res.data)

	return {
		props: {sellers},
		revalidate: 10
	}
}

export default About