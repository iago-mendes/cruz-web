import { Carousel } from 'react-responsive-carousel'

interface CarouselProps
{
	images: Array<string>
}

const MyCarousel: React.FC<CarouselProps> = ({images}) =>
{
	if (!images) return <h1>Carregando...</h1>

	return (
		<Carousel showThumbs={false} autoPlay emulateTouch infiniteLoop showStatus={false} className="carousel">
			{images.map(image => (
				<img src={image} alt='Produto da Cruz Representações' key={image} />
			))}
		</Carousel>
	)
}
	
export default MyCarousel