import {GetStaticProps} from 'next'

import illustration from '../assets/illustration1.svg'
import Carousel from '../components/Carousel'
import SEOHead from '../components/SEOHead'
import Container from '../styles/pages/index'

interface HomeProps
{
	carouselImages: Array<string>
}

const Home: React.FC<HomeProps> = ({carouselImages}) =>
{
  return (
    <Container className='page' >
      <SEOHead />
			
			<Carousel images={carouselImages} />
      <main>
				<img src={illustration} alt='Homem mexendo no computador' />
				<div className='info' >
					<h1>Cruz Representações</h1>
					<h2>Excelência em representação comercial em Minas Gerais.</h2>
				</div>
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const carouselImages =
	[
		'https://pachaalimentos.com/wp-content/uploads/2017/05/home_BANNER-PRINCIPAL_A01-3.jpg',
		'https://pachaalimentos.com/wp-content/uploads/2017/05/home_BANNER-PRINCIPAL_A01-2.jpg',
		'https://pachaalimentos.com/wp-content/uploads/2017/05/home_BANNER-PRINCIPAL_A02.jpg'
	]

	return {
		props: {carouselImages},
		revalidate: 10
	}
}

export default Home