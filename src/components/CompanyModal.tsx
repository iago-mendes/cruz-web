import Modal from 'react-modal'

import Container from '../styles/components/CompanyModal'

Modal.setAppElement('#__next')

export interface Company
{
  id: string
  imagem: string
  nome_fantasia: string
  descricao: string
  site: string
}

interface CompanyModalProps
{
	company: Company
	isOpen: boolean
	setIsOpen: Function
}

const CompanyModal: React.FC<CompanyModalProps> = ({company, isOpen, setIsOpen}) =>
{
	const style: Modal.Styles =
	{
		content:
		{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'none',
			border: 'none'
		},
		overlay:
		{
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		}
	}

	return (
		<Modal isOpen={isOpen} style={style} >
			<Container>
				<button className="close" onClick={() => setIsOpen(false)}>
					X
				</button>
			</Container>
		</Modal>
	)
}

export default CompanyModal