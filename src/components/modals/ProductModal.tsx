import Container from '../../styles/components/ProductModal'
import Product from '../../models/product'
import ModalContainer from './Container'

interface ProductModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void

	product: Product
}

const ProductModal: React.FC<ProductModalProps> = ({product, isOpen, setIsOpen}) =>
{
	return (
		<ModalContainer
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<Container>
				<img src={product.imagem} alt={product.nome}/>
				<div>
					<h1>{product.nome}</h1>
					<h2>{product.unidade}</h2>
				</div>
			</Container>
		</ModalContainer>
	)
}

export default ProductModal