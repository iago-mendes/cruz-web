import Head from 'next/head'
import Image from 'next/image'

import Container from '../styles/pages/sobre'
import logo from '../assets/logo.svg'
import { GetStaticProps } from 'next'
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
		<Container>
			<Head>
				<title>Sobre | Cruz Representações</title>
			</Head>

			<div className="history">
				<Image src={logo} alt='Cruz representações' width={100} height={100} />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa massa, cursus eget ultrices sed, laoreet non sapien. Mauris vitae pellentesque metus. Suspendisse scelerisque molestie felis, sit amet iaculis turpis. Quisque sagittis vehicula enim, vitae hendrerit magna ullamcorper vel. Quisque eu imperdiet tellus, sit amet porta tellus. Vestibulum vehicula facilisis justo, eu feugiat tortor placerat tincidunt. Aenean vitae est vitae neque venenatis semper. Mauris velit metus, volutpat et fringilla a, auctor eu massa. Suspendisse nec neque eget risus dapibus maximus et id metus. Aliquam vitae eleifend tellus. Etiam vel nisl vitae nisi pulvinar dignissim non in eros. </p>
			</div>

			<main>
				{sellers.map(seller => seller.funcao !== 'Desenvolvedor' && (
					<div className="seller" key={seller.id}>
						<img src={seller.imagem} alt={seller.nome} />
						<div className="text">
							<h1>{seller.nome}</h1>
							<h2>{seller.funcao}</h2>
						</div>
					</div>
				))}
			</main>

			<div className="website">
				<div className="seller">
					<img
						src={sellers.find(seller => seller.funcao === 'Desenvolvedor').imagem}
						alt={sellers.find(seller => seller.funcao === 'Desenvolvedor').nome} />
					<div className="text">
						<h1>{sellers.find(seller => seller.funcao === 'Desenvolvedor').nome}</h1>
						<h2>{sellers.find(seller => seller.funcao === 'Desenvolvedor').funcao}</h2>
					</div>
				</div>
			</div>
		</Container>
	)	
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	let sellers = []
	await api.get('sellers').then(res => sellers = res.data)

	return {
		props: {sellers}
	}
}

export default About