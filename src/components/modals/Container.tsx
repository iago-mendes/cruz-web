import {FiX} from 'react-icons/fi'
import Modal from 'react-modal'

import Container from '../../styles/components/modals/Container'
import {modalStyle} from '../../styles/global'

Modal.setAppElement('#__next')

interface ContainerModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void
}

const ContainerModal: React.FC<ContainerModalProps> = ({isOpen, setIsOpen, children}) =>
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
				
				{children}
			</Container>
		</Modal>
	)
}

export default ContainerModal