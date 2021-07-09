import Container from '../../styles/components/modals/RequestProduct'
import {ProductListedPriced} from '../../models/product'
import formatPrice from '../../utils/formatPrice'
import formatPercentage from '../../utils/formatPercentage'
import ModalContainer from './Container'

interface RequestProductProps {
	isOpen: boolean
	setIsOpen: (p: boolean) => void

	selected: ProductListedPriced
}

const RequestProduct: React.FC<RequestProductProps> = ({
	isOpen,
	setIsOpen,
	selected
}) => {
	return (
		<ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
			<Container>
				<div className="group">
					<div className="img">
						<img src={selected.imagem} alt={selected.nome} />
					</div>
					<h1>{selected.nome}</h1>
				</div>
				<ul>
					<li>
						<h2>Unidade</h2>
						<span>{selected.unidade}</span>
					</li>
					<li>
						<h2>Preço</h2>
						<span>{formatPrice(selected.preco)}</span>
					</li>
					<li>
						<h2>ST</h2>
						<span>{formatPercentage(selected.st)}</span>
					</li>
					<li>
						<h2>IPI</h2>
						<span>{formatPercentage(selected.ipi)}</span>
					</li>
				</ul>
			</Container>
		</ModalContainer>
	)
}

export default RequestProduct
