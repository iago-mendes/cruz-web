import {GetStaticPaths, GetStaticProps} from 'next'
import {useState} from 'react'

import api from '../../services/api'
import Container from '../../styles/pages/catalogo/[company]'
import ProductModal from '../../components/modals/ProductModal'
import Product from '../../models/product'
import Loading from '../../components/Loading'
import SEOHead from '../../components/SEOHead'
import {CompanyListed} from '../../models/company'

interface ProductsProps {
	products: Array<Product>
	companyName: string
}

const Products: React.FC<ProductsProps> = ({products, companyName}) => {
	const [product, setProduct] = useState<Product>({
		id: '',
		imagem: '',
		nome: '',
		unidade: ''
	})
	const [isModalOpen, setIsModalOpen] = useState(false)

	if (!products || !companyName) return <Loading />

	function handleProductClick(clickedProduct: Product) {
		setProduct(clickedProduct)
		setIsModalOpen(true)
	}

	return (
		<Container className="page">
			<SEOHead title={`${companyName} — Produtos | Cruz Representações`} />

			<ProductModal
				product={product}
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
			/>

			<main>
				{products.map(product => (
					<div
						className="product"
						key={product.id}
						onClick={() => handleProductClick(product)}
					>
						<div className="img">
							<img src={product.imagem} alt={product.nome} />
						</div>
						<h1>{product.nome}</h1>
					</div>
				))}
			</main>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const companies = await api
		.get('companies')
		.then(({data}: {data: CompanyListed[]}) => data)

	const paths = companies.map(company => ({
		params: {company: company.id}
	}))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ctx => {
	const {company} = ctx.params

	const products: Product[] = await api
		.get(`companies/${company}/products`)
		.then(res => res.data)

	const companyName = await api
		.get(`companies/${company}`)
		.then(({data}: {data: CompanyListed}) => data.nome_fantasia)

	return {
		props: {products, companyName},
		revalidate: 10
	}
}

export default Products
