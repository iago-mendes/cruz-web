import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import api from '../../../services/api'
import Container from '../../../styles/pages/catalogo/[company]/[line]'

interface LineProductsProps
{
	products: Array<
	{
		id: string
    imagem: string
    nome: string
    unidade: string
	}>
	companyName: string
}

const LineProducts: React.FC<LineProductsProps> = ({products, companyName}) =>
{
	return (
		<Container className='container'>
			<Head>
				<title>{companyName} — Produtos | Cruz Representações</title>
			</Head>

			{products.map(product => (
				<div key={product.id}>
					<img src={product.imagem} alt={product.nome}/>
					<h1>{product.nome}</h1>
				</div>
			))}
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async ctx =>
{
	const {data: companies} = await api.get('companies')
	let paths = []

	const promise = companies.map(async company =>
	{
		await api.get(`companies/${company.id}/products`).then(({data: lines}) =>
		{
			lines.map(line => paths.push(
			{
				params: {company: company.id, line: line.id}
			}))
		})
	})
	await Promise.all(promise)

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {company, line} = ctx.params

	let products = []
	await api.get(`companies/${company}/products/${line}`).then(res => products = res.data)

	let companyName = ''
	await api.get(`companies/${company}`).then(res => companyName = res.data.nome_fantasia)

	return {
		props: {products, companyName},
		revalidate: 10
	}
}

export default LineProducts