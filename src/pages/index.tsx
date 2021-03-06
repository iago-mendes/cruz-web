import {GetStaticProps} from 'next'

import illustration from '../assets/images/illustration1.svg'
import Carousel from '../components/Carousel'
import SEOHead from '../components/SEOHead'
import api from '../services/api'
import Container from '../styles/pages/index'

interface HomeProps {
	carouselImages: Array<string>
}

const Home: React.FC<HomeProps> = ({carouselImages}) => {
	return (
		<Container className="page">
			<SEOHead />

			<Carousel images={carouselImages} />
			<main>
				<div className="info">
					<h1>Cruz Representações</h1>
					<h2>Excelência em representação comercial</h2>
				</div>
				<img src={illustration} alt="Homem mexendo no computador" />
			</main>
			<p className="message">Faça suas compras online pelo nosso E-commerce</p>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const {data: carouselImages}: {data: string[]} = await api.get('banners')

	return {
		props: {carouselImages},
		revalidate: 10
	}
}

export default Home
