import {useRouter} from 'next/router'

import Container from '../../styles/components/CompanyModal'
import Company from '../../models/company'
import React from 'react'
import ModalContainer from './Container'

interface CompanyModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void

	company: Company
}

const CompanyModal: React.FC<CompanyModalProps> = ({company, isOpen, setIsOpen}) =>
{
	const Router = useRouter()
	
	return (
		<ModalContainer
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<Container>
				<div className='scrollable'>
					<div className='logoName' >
						<img src={company.imagem} alt={company.nome_fantasia}/>
						<h1>{company.nome_fantasia}</h1>
					</div>
				
					<p>{company.descricao}</p>
				
					<div className='links' >
						<a href={company.site} target='_blank' >Site da empresa</a>
						<button onClick={() => Router.push(`/catalogo/${company.id}`)} >
						Catálogo de produtos
						</button>
					</div>
				</div>
			</Container>
		</ModalContainer>
	)
}

export default CompanyModal