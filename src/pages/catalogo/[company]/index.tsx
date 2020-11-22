import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
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
	companyName: string
}

const CompanyLines: React.FC <CompanyLinesProps> = ({lines, companyName}) =>
{
	return (
		<Container className='container'>
			<Head>
				<title>{companyName} — Linhas | Cruz Representações</title>
			</Head>

			{lines.map(line => (
				<div key={line.id}>
					<img src={line.imagem} alt={line.nome}/>
					<h1>{line.nome}</h1>
				</div>
			))}
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
	const {company} = ctx.params

	let lines = []
	await api.get(`companies/${company}/products`).then(res => lines = res.data)

	let companyName = ''
	await api.get(`companies/${company}`).then(res => companyName = res.data.nome_fantasia)

	return {
		props: {lines, companyName},
		revalidate: 10
	}
}

export default CompanyLines