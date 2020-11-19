import { GetStaticProps } from 'next'
import {useSession} from 'next-auth/client'

import Container from '../styles/pages/empresas'
import Loading from '../components/Loading'
import NotLogged from '../components/NotLogged'
import api from '../services/api'

interface CompaniesProps
{
	companies: Array<
	{
		id: string
		imagem: string
		nome_fantasia: string
		descricao_curta: string
	}>
}

const Companies: React.FC<CompaniesProps> = ({companies}) =>
{
	const [session, loading] = useSession()

	if (loading) return <Loading />
	if (!session) return <NotLogged />

	return (
		<Container className='container'>
			{companies.map(company => (
				<div className='flipCard' key={company.id}>
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

	return {
		props: {companies},
		revalidate: 10
	}
}

export default Companies