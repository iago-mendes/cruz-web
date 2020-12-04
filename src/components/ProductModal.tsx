import Modal from 'react-modal'
import {FiX} from 'react-icons/fi'

import Container from '../styles/components/ProductModal'
import Loading from './Loading'

Modal.setAppElement('#__next')

export interface Product
{
	id: string
	imagem: string
	nome: string
	unidade: string
}

interface ProductModalProps
{
	product: Product
	isOpen: boolean
	setIsOpen: Function
}

const ProductModal: React.FC<ProductModalProps> = ({product, isOpen, setIsOpen}) =>
{
	const style: Modal.Styles =
	{
		content:
		{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'none',
			border: 'none',
			overflow: 'hidden',
			height: '100%',
			width: '100%',
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			padding: 0
		},
		overlay:
		{
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		}
	}

	return (
		<Modal isOpen={isOpen} style={style} >
			{
				!product
				? <Loading />
				: (
					<Container>
						<button className="close" onClick={() => setIsOpen(false)}>
							<FiX size={25} />
						</button>

						<main>
							<img src={product.imagem} alt={product.nome}/>
							<div>
								<h1>{product.nome}</h1>
								<h2>{product.unidade}</h2>
							</div>
						</main>
					</Container>
				)
			}
		</Modal>
	)
}

export default ProductModal