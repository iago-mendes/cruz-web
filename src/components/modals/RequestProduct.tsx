import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'

import Container from '../../styles/components/modals/RequestProduct'
import {modalStyle} from '../../styles/global'
import {ProductListedPriced} from '../../models/product'

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
					<h1>{selected.nome}</h1>
				</main>
			</Container>
		</Modal>
	)
}

export default RequestProduct