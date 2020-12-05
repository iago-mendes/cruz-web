import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import {useState} from 'react'

import api from '../../../services/api'
import Container from '../../../styles/pages/catalogo/[company]/[line]'
import ProductModal, {Product} from '../../../components/ProductModal'
import Loading from '../../../components/Loading'

interface LineProductsProps
{
	products: Array<Product>
	companyName: string
}

const LineProducts: React.FC<LineProductsProps> = ({products, companyName}) =>
{
	const [product, setProduct] = useState<Product>(
	{
		id: '',
		imagem: '',
		nome: '',
		unidade: ''
	})
	const [isModalOpen, setIsModalOpen] = useState(false)

	if (!products || !companyName)
		return <Loading />

	function handleProductClick(clickedProduct: Product)
	{
		setProduct(clickedProduct)
		setIsModalOpen(true)
	}

	return (
		<Container className='container'>
			<Head>
				<title>{companyName} — Produtos | Cruz Representações</title>
			</Head>

			<ProductModal product={product} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

			<main>
				{products.map(product => (
					<div key={product.id} onClick={() => handleProductClick(product)}>
						<img src={product.imagem} alt={product.nome}/>
						<h1>{product.nome}</h1>
					</div>
				))}
			</main>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async ctx =>
{
	const {data: companies} = await api.get('companies')
	let paths = []

	const promise = companies.map(async company =>
	{
		await api.get(`companies/${company.id}/lines`).then(({data: lines}) =>
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
	await api.get(`companies/${company}/lines/${line}/products`).then(res => products = res.data)

	let companyName = ''
	await api.get(`companies/${company}`).then(res => companyName = res.data.nome_fantasia)

	return {
		props: {products, companyName},
		revalidate: 10
	}
}

export default LineProducts