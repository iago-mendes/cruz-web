interface Product
{
	id: string
	imagem: string
	nome: string
	unidade: string
}

export interface ProductListedPriced
{
	id: string
	imagem: string
	nome: string
	unidade: string
	st: number
	ipi: number
	preco: number
}

export const defaultProductListedPriced: ProductListedPriced =
{
	id: '',
	imagem: '',
	nome: '',
	unidade: '',
	st: 0,
	ipi: 0,
	preco: 0
}

export default Product