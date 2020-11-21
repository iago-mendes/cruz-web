import {GetStaticProps} from 'next'
import {useSession} from 'next-auth/client'
import {useState} from 'react'

import Container from '../styles/pages/empresas'
import Loading from '../components/Loading'
import NotLogged from '../components/NotLogged'
import api from '../services/api'
import CompanyModal, {Company} from '../components/CompanyModal'
import Head from 'next/head'

interface CompaniesProps
{
	companies: Array<
	{
		id: string
		imagem: string
		nome_fantasia: string
		descricao_curta: string
	}>
	companiesInfo: Array<Company>
}

const Companies: React.FC<CompaniesProps> = ({companies, companiesInfo}) =>
{
	const [session, loading] = useSession()
	const [company, setCompany] = useState(companiesInfo[0])
	const [isModalOpen, setIsModalOpen] = useState(false)

	if (loading) return <Loading />
	if (!session) return <NotLogged />

	function handleCompanyClick(id: string)
	{
		const clickedCompany = companiesInfo.find(company => company.id === id)
		setCompany(clickedCompany)
		setIsModalOpen(true)
	}

	return (
		<Container className='container'>
			<Head>
				<title>Empresas | Cruz representações</title>
			</Head>
			<CompanyModal company={company} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
			{companies.map(company => (
				<div className='flipCard' key={company.id} onClick={() => handleCompanyClick(company.id)} >
						<div className='companyCard'>
						<div className='front'>
							<img src={company.imagem} alt={company.nome_fantasia} />
						</div>
						<div className='back'>
							<h1>{company.nome_fantasia}</h1>
							<h2>{company.descricao_curta}</h2>
						</div>
					</div>
				</div>
			))}
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	let companies = []
	await api.get('companies').then(res => companies = res.data)

	let companiesInfo = []
	if (companies.length != 0)
	{
		const promise = companies.map(async company =>
		{
			await api.get(`companies/${company.id}`).then(res => companiesInfo.push(res.data))
		})
		await Promise.all(promise)
	}

	return {
		props: {companies, companiesInfo},
		revalidate: 10
	}
}

export default Companies