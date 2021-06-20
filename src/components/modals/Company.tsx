import Link from 'next/link'

import Container from '../../styles/components/modals/Company'
import Company from '../../models/company'
import ModalContainer from './Container'

interface CompanyModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void

	company: Company
}

const CompanyModal: React.FC<CompanyModalProps> = ({company, isOpen, setIsOpen}) =>
{
	return (
		<ModalContainer
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<Container>
				<div className='logoName' >
					<img src={company.imagem} alt={company.nome_fantasia}/>
					<h1>{company.nome_fantasia}</h1>
				</div>
			
				<p>{company.descricao}</p>
			
				<div className='links' >
					{company.site && (
						<a href={company.site} target='_blank' rel='noreferrer' >
							Site da empresa
						</a>
					)}
					<Link href={`/catalogo/${company.id}`} >
						Catálogo de produtos
					</Link>
				</div>
			</Container>
		</ModalContainer>
	)
}

export default CompanyModal