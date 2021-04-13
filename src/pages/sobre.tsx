import {GetStaticProps} from 'next'
import {FiGithub, FiLinkedin} from 'react-icons/fi'

import Container from '../styles/pages/sobre'
import logo from '../assets/logo.svg'
import api from '../services/api'
import SEOHead from '../components/SEOHead'

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
		<Container className='page' >
			<SEOHead
				title='Sobre | Cruz Representações'
			/>

			<main>
				<div className='cardGroup history'>
					<span>História</span>
					<img src={logo} alt='Cruz representações' />
					<p>
						<strong>Cruz Representações</strong>
						<br/><br/>
						Criada em 2010, a Cruz Representações cresceu em qualidade e excelência em representação comercial. Temos orgulho em oferecer a nossos clientes as principais marcas do Brasil.
						<br/>
						Localizada na cidade de Montes Claros, a Cruz Representações possui em sua estrutura uma equipe de vendedores pronta para atendê-lo na região de Minas Gerais. Toda essa estrutura foi montada para agilizar nosso trabalho junto a nossos parceiros.
					</p>
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