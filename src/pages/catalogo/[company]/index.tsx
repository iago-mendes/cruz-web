import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Loading from '../../../components/Loading'

import api from '../../../services/api'
import Container from '../../../styles/pages/catalogo/[company]/index'

interface CompanyLinesProps
{
	lines: Array<
	{
		id: string,
		nome: string
		imagem: string
	}>
	company: {name: string, id: string}
}

const CompanyLines: React.FC <CompanyLinesProps> = ({lines, company}) =>
{
	const Router = useRouter()

	if (!lines || !company)
		return <Loading />

	return (
		<Container className='container'>
			<Head>
				<title>{company.name} — Linhas | Cruz Representações</title>
			</Head>

			<main>
				{lines.map(line => (
					<div className='line' key={line.id} onClick={() => Router.push(`/catalogo/${company.id}/${line.id}`)}>
						<div>
							<img src={line.imagem} alt={line.nome}/>
						</div>
						<h1>{line.nome}</h1>
					</div>
				))}
			</main>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async ctx =>
{
	const {data} = await api.get('companies')

	const paths = data.map(company => (
	{
		params: {company: company.id}
	}))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {company: id} = ctx.params

	let lines = []
	await api.get(`companies/${id}/lines`).then(res => lines = res.data)

	let company = {name: '', id}
	await api.get(`companies/${id}`).then(res => company.name = res.data.nome_fantasia)

	return {
		props: {lines, company},
		revalidate: 10
	}
}

export default CompanyLines