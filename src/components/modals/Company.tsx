import Modal from 'react-modal'
import {FiX} from 'react-icons/fi'
import {useRouter} from 'next/router'

import Container from '../../styles/components/CompanyModal'
import Loading from '../Loading'
import Company from '../../models/company'

Modal.setAppElement('#__next')

interface CompanyModalProps
{
	company: Company
	isOpen: boolean
	setIsOpen: Function
}

const CompanyModal: React.FC<CompanyModalProps> = ({company, isOpen, setIsOpen}) =>
{
	const Router = useRouter()

	const style: Modal.Styles =
	{
		content:
		{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'none',
			border: 'none',
			padding: 0,
			width: '100%',
			height: '100%',
			left: 0,
			top: 0
		},
		overlay:
		{
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		}
	}

	return (
		<Modal isOpen={isOpen} style={style} >
			{
				!company
				? <Loading />
				: (
					<Container>
						<div className="scrollable">
							<button className="close" onClick={() => setIsOpen(false)}>
								<FiX size={25} />
							</button>

							<header>
								<img src={company.imagem} alt={company.nome_fantasia}/>
								<h1>{company.nome_fantasia}</h1>
							</header>

							<p>{company.descricao}</p>

							<footer>
								<a href={company.site} target='_blank' >Site da empresa</a>
								<button onClick={() => Router.push(`/catalogo/${company.id}`)} >
									Catálogo de produtos
								</button>
							</footer>
						</div>
					</Container>
				)
			}
		</Modal>
	)
}

export default CompanyModal