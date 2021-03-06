import {GetStaticProps} from 'next'
import {useState} from 'react'

import Container from '../styles/pages/empresas'
import api from '../services/api'
import CompanyModal from '../components/modals/Company'
import Company from '../models/company'
import SEOHead from '../components/SEOHead'

interface CompaniesProps {
	companies: Array<{
		id: string
		imagem: string
		nome_fantasia: string
		descricao_curta: string
	}>
	companiesInfo: Array<Company>
}

const Companies: React.FC<CompaniesProps> = ({companies, companiesInfo}) => {
	const [company, setCompany] = useState(companiesInfo[0])
	const [isModalOpen, setIsModalOpen] = useState(false)

	function handleCompanyClick(id: string) {
		const clickedCompany = companiesInfo.find(company => company.id === id)
		setCompany(clickedCompany)
		setIsModalOpen(true)
	}

	return (
		<Container className="page">
			<SEOHead title="Empresas | Cruz representações" />

			<CompanyModal
				company={company}
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
			/>

			<main>
				{companies.map(company => (
					<div
						className="flipCard"
						key={company.id}
						onClick={() => handleCompanyClick(company.id)}
					>
						<div className="companyCard">
							<div className="front">
								<img src={company.imagem} alt={company.nome_fantasia} />
							</div>
							<div className="back">
								<h1>{company.nome_fantasia}</h1>
								<h2>{company.descricao_curta}</h2>
							</div>
						</div>
					</div>
				))}
			</main>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	let companies = []
	await api
		.get('companies')
		.then(res => (companies = res.data))
		.catch(error => console.log('<< error.response >>', error.response))

	const companiesInfo = []
	if (companies.length != 0) {
		const promise = companies.map(async company => {
			await api
				.get(`companies/${company.id}`)
				.then(res => companiesInfo.push(res.data))
				.catch(error => console.log('<< error.response >>', error.response))
		})
		await Promise.all(promise)
	}

	return {
		props: {companies, companiesInfo},
		revalidate: 10
	}
}

export default Companies
