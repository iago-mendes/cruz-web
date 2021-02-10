import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'

import Container from '../../styles/components/modals/RequestProduct'
import {modalStyle} from '../../styles/global'
import {ProductListedPriced} from '../../models/product'
import Image from 'next/image'
import formatPrice from '../../utils/formatPrice'
import formatPercentage from '../../utils/formatPercentage'

Modal.setAppElement('#__next')

interface RequestProductProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void

	selected: ProductListedPriced
}

const RequestProduct: React.FC<RequestProductProps> = ({isOpen, setIsOpen, selected}) =>
{
	return (
		<Modal
			isOpen={isOpen}
			style={modalStyle}
		>
			<Container>
				<header>
					<button className='close' onClick={() => setIsOpen(false)} >
						<FiX size={25} />
					</button>
				</header>
				<main>
					<div className="group">
						<div className='img'>
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
				</main>
			</Container>
		</Modal>
	)
}

export default RequestProduct