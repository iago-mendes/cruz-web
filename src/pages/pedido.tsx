import Head from 'next/head'
import {useEffect, useState} from 'react'
import {FiArrowLeft, FiMinus, FiPlus} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'

import Container, {Card} from '../styles/pages/pedido'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import useUser from '../hooks/useUser'
import api from '../services/api'
import {CompanyListed} from '../models/company'
import warningAlert from '../utils/alerts/warning'
import {ProductListedPriced} from '../models/product'
import {RequestProduct} from '../models/request'
import formatPrice from '../utils/formatPrice'

const Pedido: React.FC = () =>
{
	const {user} = useUser()
	const router = useRouter()

	const [step, setStep] = useState(1)
	const [representada, setRepresentada] = useState('')
	const [produtos, setProdutos] = useState<RequestProduct[]>([])

	const [companyOptions, setCompanyOptions] = useState<CompanyListed[]>([])
	const [productOptions, setProductOptions] = useState<ProductListedPriced[]>([])

	useEffect(() =>
	{
		api.get('companies').then(({data}:{data: CompanyListed[]}) =>
		{
			if (user.data && user.data.representadas)
			{
				let tmpCompanyOptions: CompanyListed[] = []

				data.map(company => 
				{
					if (user.data.representadas.find(({id}) => id === company.id))
						tmpCompanyOptions.push(company)
				})

				setCompanyOptions(tmpCompanyOptions)
			}
		})
	}, [user])

	useEffect(() =>
	{
		if (representada !== '')
			api.get(`companies/${representada}/products-priced`, {params: {client: user.id}})
				.then(({data}) =>
				{
					if (data[0])
						setProductOptions(data)
				})
	}, [representada])

	function goBack()
	{
		if (step > 1)
			setStep(step - 1)
	}

	function goNext()
	{
		if (step === 1 && representada === '')
			warningAlert('Você precisa escolher uma representada para continuar.')
		else if (step === 2 && produtos.length === 0)
			warningAlert('Você precisa escolher pelo menos um produto para continuar.')
		else if (step < 3)
			setStep(step + 1)
	}

	function handleSelectCompany(id: string)
	{
		if (id === representada)
			setRepresentada('')
		else
			setRepresentada(id)
	}

	function handleChangeProductQuantity(product: ProductListedPriced, quantity: number)
	{
		let tmpProducts = [...produtos]
		let productIndex = produtos.findIndex(({id}) => id === product.id)

		if (productIndex >= 0)
		{
			if (quantity > 0)
				tmpProducts[productIndex].quantidade = quantity
			else
				tmpProducts.splice(productIndex, 1)
		}
		else if (quantity > 0)
		{
			tmpProducts.push(
			{
				id: product.id,
				preco: product.preco,
				quantidade: quantity,
				linhaId: product.linhaId
			})
		}

		setProdutos(tmpProducts)
	}

	const Step: React.FC = () =>
	{
		switch (step)
		{
			case 1:
				return (
					<main>
						<h1>Escolha uma representada</h1>
						<div className='grid'>
							{companyOptions.map(company => (
								<Card
									isSelected={representada === company.id}
									type='company'
									onClick={() => handleSelectCompany(company.id)}
									key={company.id}
								>
									<div className='img'>
										<img src={company.imagem} alt={company.nome_fantasia} />
									</div>
									<h2>{company.nome_fantasia}</h2>
									<h3>{company.descricao_curta}</h3>
								</Card>
							))}
						</div>
					</main>
				)
			case 2:
				return (
					<main>
						<h1>Escolha os produtos</h1>
						<div className='grid'>
							{productOptions.map(product =>
							{
								const selectedProduct = produtos.find(({id}) => id === product.id)

								const removeQuantity = selectedProduct ? selectedProduct.quantidade - 1 : 0
								const addQuantity = selectedProduct ? selectedProduct.quantidade + 1 : 1

								return (
								<Card
									isSelected={selectedProduct !== undefined}
									type='product'
									onClick={() => {}}
									key={product.id}
								>
									<div className='img'>
										<img src={product.imagem} alt={product.nome} />
									</div>
									<h3>{product.nome}</h3>
									<span>{formatPrice(product.preco)}</span>
									<div className='field'>
										<button
											onClick={() => handleChangeProductQuantity(product, removeQuantity)}
										>
											<FiMinus size={25} />
										</button>
										<input
											id='quantidade'
											name='quantidade'
											type='number'
											value={selectedProduct && selectedProduct.quantidade}
											onChange={e => handleChangeProductQuantity(product, Number(e.target.value))}
										/>
										<button
											onClick={() => handleChangeProductQuantity(product, addQuantity)}
										>
											<FiPlus size={25} />
										</button>
									</div>
								</Card>
							)})}
						</div>
					</main>
				)
			case 3:
				return (
					<main>confirm</main>
				)
		}
	}

	return (
		<Container step={step} >
			<Head>
				<title>Pedido</title>
			</Head>
			<header>
				<div className='group'>
					<button className='cancel' onClick={() => router.back()} >
						<FiArrowLeft size={30} />
						<span>Cancelar</span>
					</button>
					<h1>Você está fazendo um novo pedido</h1>
					<div className='img'>
						<Image src={logo} width={1000} height={1000} layout='responsive' />
					</div>
				</div>
				<div className='navigate'>
					<button onClick={goBack} className='back' >
						<FaAngleLeft size={25} />
						<span>Voltar</span>
					</button>

					<ul>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 1 ? '#CC9749' : '#E2DADB'} />
						</svg>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 2 ? '#CC9749' : '#E2DADB'} />
						</svg>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 3 ? '#CC9749' : '#E2DADB'} />
						</svg>
					</ul>

					<button onClick={goNext} className='next' >
						<span>{step !== 3 ? 'Continuar' : 'Finalizar'}</span>
						<FaAngleRight size={25} />
					</button>
				</div>
			</header>

			<Step />
		</Container>
	)
}

export default Pedido