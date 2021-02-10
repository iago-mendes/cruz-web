import Head from 'next/head'
import {useEffect, useState} from 'react'
import {FiArrowLeft, FiInfo, FiMinus, FiPlus} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Select from 'react-select'

import Container, {Card} from '../styles/pages/pedido'
import logo from '../assets/logo.svg'
import useUser from '../hooks/useUser'
import api from '../services/api'
import {CompanyListed, defaultCompanyListed} from '../models/company'
import warningAlert from '../utils/alerts/warning'
import {defaultProductListedPriced, ProductListedPriced} from '../models/product'
import {RequestProduct} from '../models/request'
import formatPrice from '../utils/formatPrice'
import getDate from '../utils/getDate'
import confirmAlert from '../utils/alerts/confirm'
import errorAlert from '../utils/alerts/error'
import {ClientConditions, defaultCientConditions} from '../models/client'
import {selectStyles} from '../styles/global'
import RequestProductModal from '../components/modals/RequestProduct'

const Pedido: React.FC = () =>
{
	const {user} = useUser()
	const router = useRouter()

	const [step, setStep] = useState(1)
	const [representada, setRepresentada] = useState('')
	const [produtos, setProdutos] = useState<RequestProduct[]>([])
	const [condicao, setCondicao] = useState('')

	const [companyOptions, setCompanyOptions] = useState<CompanyListed[]>([])
	const [productOptions, setProductOptions] = useState<ProductListedPriced[]>([])
	const [selectedCompany, setSelectedCompany] = useState<CompanyListed>(defaultCompanyListed)
	const [conditionOptions, setConditionOptions] = useState<ClientConditions>(defaultCientConditions)

	const [isProductModalOpen, setIsProductModalOpen] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<ProductListedPriced>(defaultProductListedPriced)

	const conditionsSelectOptions =
	[
		{label: 'À vista', value: 'vista'},
		{label: 'Cheque', value: 'cheque'},
		{label: 'Prazo', value: 'prazo'},
	]
	const prazoSelectOptions = conditionOptions.prazoOpcoes
		.filter(option => option.precoMin <= calcTotalPrice())
		.sort((a,b) => a.precoMin < b.precoMin ? -1 : 1)
		.map(option => ({label: option.nome, value: option.nome}))

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
		{
			setProdutos([])
			setCondicao('')

			api.get(`companies/${representada}/products-priced`, {params: {client: user.id}})
				.then(({data}) =>
				{
					if (data[0])
						setProductOptions(data)
				})

			api.get(`clients/${user.id}/conditions/${representada}`)
				.then(({data}:{data: ClientConditions}) =>
				{
					setConditionOptions(data)
				})
		}
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
		else if (step === 3)
		{
			if (condicao === '')
				warningAlert('Selecione uma condição de pagamento')
			else if (condicao === 'Prazo')
				warningAlert('Selecione uma opção de prazo')
			else
				setStep(step + 1)
		}
		else if (step < 4)
			setStep(step + 1)
		else if (step === 4)
			handleSubmit()
	}

	function handleSelectCompany(company: CompanyListed)
	{
		if (company.id === representada)
			setRepresentada('')
		else
		{
			setRepresentada(company.id)
			setSelectedCompany(company)
		}
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

	function calcTotalPrice()
	{
		let total = 0

		produtos.map(requestProduct =>
		{
			const listedProduct = productOptions.find(({id}) => id === requestProduct.id)
			if (!listedProduct)
				return
			
			const subtotal = requestProduct.quantidade * requestProduct.preco
			const st = subtotal * listedProduct.st / 100
			const ipi = subtotal * listedProduct.ipi / 100

			total += subtotal + st + ipi
		})

		return total
	}

	function openProductModal(selected: ProductListedPriced)
	{
		setSelectedProduct(selected)
		setIsProductModalOpen(true)
	}

	async function handleSubmit()
	{
		const data =
		{
			cliente: user.id,
			representada,
			produtos,
			data: getDate(),
			condicao,
			tipo: {venda: true, troca: false},
			status: {concluido: false, enviado: false, faturado: false}
		}

		api.post('requests', data)
			.then(() =>
			{
				confirmAlert('Seu pedido foi realizado com sucesso!')
				router.back()
			})
			.catch(err =>
			{
				errorAlert(err.response.data.message)
			})
	}

	return (
		<Container step={step} >
			<Head>
				<title>Pedido</title>
			</Head>

			<RequestProductModal
				isOpen={isProductModalOpen}
				setIsOpen={setIsProductModalOpen}
				selected={selectedProduct}
			/>

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
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 4 ? '#CC9749' : '#E2DADB'} />
						</svg>
					</ul>

					<button onClick={goNext} className='next' >
						<span>{step !== 4 ? 'Continuar' : 'Finalizar'}</span>
						<FaAngleRight size={25} />
					</button>
				</div>
			</header>

			{step === 1 && (
				<main>
					<h1>Escolha uma representada</h1>
					<div className='grid'>
						{companyOptions.map(company => (
							<Card
								isSelected={representada === company.id}
								type='company'
								onClick={() => handleSelectCompany(company)}
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
			)}

			{step === 2 && (
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
								<button className='info' onClick={() => openProductModal(product)}>
									<FiInfo size={25} />
								</button>
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
										value={selectedProduct ? selectedProduct.quantidade : 0}
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
			)}

			{step === 3 && (
				<main>
					<h1>Escolha uma condição de pagamento</h1>
					<div className='group'>
						<Select
							value={conditionsSelectOptions.find(option => option.label === condicao)}
							options={conditionsSelectOptions}
							onChange={e => setCondicao(e.label)}
							styles={selectStyles}
							placeholder='Condição de pagamento'
						/>
					</div>

					{!['', 'À vista', 'Cheque'].includes(condicao) && (
						<div className='group'>
							<Select
								value={prazoSelectOptions.find(option => option.label === condicao)}
								options={prazoSelectOptions}
								onChange={e => setCondicao(e.label)}
								styles={selectStyles}
								placeholder='Opção de prazo'
							/>
						</div>
					)}
				</main>
			)}

			{step === 4 && (
				<main>
					<h1>Confirme seu pedido</h1>
					<div className='group'>
						<label>Representada</label>
						<Card
							isSelected={false}
							type='product'
						>
							<div className='img'>
								<img src={selectedCompany.imagem} alt={selectedCompany.nome_fantasia} />
							</div>
							<h2>{selectedCompany.nome_fantasia}</h2>
							<h3>{selectedCompany.descricao_curta}</h3>
						</Card>
					</div>
					<div className='group'>
						<label>Produtos</label>
						<div className='grid'>
							{produtos.map(product =>
							{
								const pricedProduct = productOptions.find(({id}) => id === product.id)

								return (
									<Card
										isSelected={false}
										type='product'
										onClick={() => {}}
										key={product.id}
									>
										<button className='info' onClick={() => openProductModal(pricedProduct)}>
											<FiInfo size={25} />
										</button>
										<div className='img'>
											<img src={pricedProduct.imagem} alt={pricedProduct.nome} />
										</div>
										<h3>{pricedProduct.nome}</h3>
										<span>{formatPrice(product.preco)}</span>
										<span>Quantidade: {product.quantidade}</span>
									</Card>
								)
							})}
						</div>
					</div>
					<div className="group">
						<label>Condição de pagamento</label>
						<span className='condition' >{condicao}</span>
					</div>
				</main>
			)}

			{step !== 1 && (
				<div id='totalPrice'>
					<h3>Total:</h3>
					<span>{formatPrice(calcTotalPrice())}</span>
				</div>
			)}

		</Container>
	)
}

export default Pedido