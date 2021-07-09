import {useEffect, useState} from 'react'
import {FiInfo, FiMinus, FiPlus, FiSearch, FiX} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Select from 'react-select'
import Switch from 'react-switch'

import freteOptions from '../../../db/options/frete.json'

import Container, {Card} from '../../styles/pages/pedidos/novo'
import logo from '../../assets/logo.svg'
import {useAuth} from '../../hooks/useAuth'
import api from '../../services/api'
import {
	CompanyCondition,
	CompanyContact,
	CompanyListed,
	defaultCompanyListed,
	loadingCompanyListed
} from '../../models/company'
import warningAlert from '../../utils/alerts/warning'
import {
	defaultProductListedPriced,
	ProductListedPriced
} from '../../models/product'
import {RequestProduct, RequestRaw} from '../../models/request'
import formatPrice from '../../utils/formatPrice'
import getDate from '../../utils/getDate'
import sucessAlert from '../../utils/alerts/sucess'
import errorAlert from '../../utils/alerts/error'
import {selectStyles} from '../../styles/global'
import RequestProductModal from '../../components/modals/RequestProduct'
import SEOHead from '../../components/SEOHead'
import {SelectOption} from '../../models'
import formatDate from '../../utils/formatDate'
import formatPercentage from '../../utils/formatPercentage'
import confirmAlert from '../../utils/alerts/confirm'
import {SkeletonLoading} from '../../utils/skeletonLoading'

const Pedido: React.FC = () => {
	const {user} = useAuth()
	const {push, back} = useRouter()

	const [step, setStep] = useState(1)
	const [representada, setRepresentada] = useState('')
	const [produtos, setProdutos] = useState<RequestProduct[]>([])
	const [condicao, setCondicao] = useState('')
	const [frete, setFrete] = useState(freteOptions[0].value)
	const [contactName, setContactName] = useState('')
	const [contactPhone, setContactPhone] = useState('')

	const defaultCompanyOptions = Array(8).fill(loadingCompanyListed)
	const [companyOptions, setCompanyOptions] = useState<CompanyListed[]>(
		defaultCompanyOptions
	)
	const [productOptions, setProductOptions] = useState<ProductListedPriced[]>(
		[]
	)
	const [selectedCompany, setSelectedCompany] =
		useState<CompanyListed>(defaultCompanyListed)
	const [conditionOptions, setConditionOptions] = useState<CompanyCondition[]>(
		[]
	)
	const [contactOptions, setContactOptions] = useState<CompanyContact[]>([])

	const [isProductModalOpen, setIsProductModalOpen] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<ProductListedPriced>(
		defaultProductListedPriced
	)

	const [isAddingNewContact, setIsAddingNewContact] = useState(false)
	const [newContactName, setNewContactName] = useState('')
	const [newContactPhone, setNewContactPhone] = useState('')
	const [isSavingNewContact, setIsSavingNewContact] = useState(true)

	const [productSearch, setProductSearch] = useState('')
	const [companySearch, setCompanySearch] = useState('')

	const conditionSelectOptions = conditionOptions
		.filter(option => option.precoMin <= calcTotalPrice())
		.sort((a, b) => (a.precoMin < b.precoMin ? -1 : 1))
		.map(option => ({label: option.nome, value: option.nome}))

	const contactSelectOptions = contactOptions.map(option => ({
		label: option.nome,
		value: option.telefone
	}))

	const productSearchedOptions =
		productSearch === ''
			? productOptions
			: productOptions.filter(product => {
					const index = product.nome
						.toLowerCase()
						.search(productSearch.toLowerCase())
					return index >= 0
			  })
	productSearchedOptions.sort((a, b) => (a.nome < b.nome ? -1 : 1))

	const companySearchedOptions =
		companySearch === ''
			? companyOptions
			: companyOptions.filter(company => {
					const indexName = company.nome_fantasia
						.toLowerCase()
						.search(companySearch.toLowerCase())
					const indexDescription = company.descricao_curta
						.toLowerCase()
						.search(companySearch.toLowerCase())
					return indexName >= 0 || indexDescription >= 0
			  })
	companySearchedOptions.sort((a, b) =>
		a.nome_fantasia < b.nome_fantasia ? -1 : 1
	)

	const minimumPrice =
		conditionOptions.length > 0
			? conditionOptions.sort((a, b) => (a.precoMin < b.precoMin ? -1 : 1))[0]
					.precoMin
			: 0

	useEffect(() => {
		api.get('companies').then(({data}: {data: CompanyListed[]}) => {
			if (user.data && user.data.representadas) {
				const tmpCompanyOptions: CompanyListed[] = []

				data.map(company => {
					if (user.data.representadas.find(({id}) => id === company.id))
						tmpCompanyOptions.push(company)
				})

				setCompanyOptions(tmpCompanyOptions)
			}
		})
	}, [user])

	useEffect(() => {
		if (representada !== '') {
			setProdutos([])
			setCondicao('')

			api
				.get(`companies/${representada}/products/priced`, {
					params: {client: user.id}
				})
				.then(({data}) => {
					if (data[0]) setProductOptions(data)
				})

			api
				.get(`clients/${user.id}/conditions/${representada}`)
				.then(({data}: {data: CompanyCondition[]}) => {
					setConditionOptions(data)
				})

			api
				.get(`clients/${user.id}/contacts`)
				.then(({data}: {data: CompanyContact[]}) => {
					setContactOptions(data)
				})
		}
	}, [representada])

	function goBack() {
		if (step > 1) setStep(step - 1)
	}

	function goNext() {
		if (step === 1 && representada === '')
			return warningAlert(
				'Você precisa escolher uma representada para continuar.'
			)

		if (step === 2) {
			if (produtos.length === 0)
				return warningAlert(
					'Você precisa escolher pelo menos um produto para continuar.'
				)

			if (calcTotalPrice() < minimumPrice)
				return warningAlert(
					`O pedido mínimo dessa representada é de ${formatPrice(
						minimumPrice
					)}.`
				)
		}

		if (step === 3) {
			if (condicao === '')
				return warningAlert(
					' Você precisa selecionar uma condição de pagamento.'
				)
			if (frete === '')
				return warningAlert(' Você precisa selecionar uma opção de frete.')
			if (contactPhone === '' && newContactPhone === '')
				return warningAlert(' Você precisa selecionar uma opção de contato.')
		}

		if (step < 4) return setStep(step + 1)
		if (step === 4) return handleSubmit()
	}

	function cancel() {
		confirmAlert(
			'Você deseja cancelar?',
			'Se você cancelar, o seu novo pedido será descartado.',
			back,
			'Cancelar pedido',
			'Continuar fazendo pedido'
		)
	}

	function handleSelectCompany(company: CompanyListed) {
		if (company.id === representada) setRepresentada('')
		else {
			setRepresentada(company.id)
			setSelectedCompany(company)
		}
	}

	function handleChangeProductQuantity(
		product: ProductListedPriced,
		quantity: number
	) {
		const tmpProducts = [...produtos]
		const productIndex = produtos.findIndex(({id}) => id === product.id)

		if (productIndex >= 0) {
			if (quantity > 0) tmpProducts[productIndex].quantidade = quantity
			else tmpProducts.splice(productIndex, 1)
		} else if (quantity > 0) {
			tmpProducts.push({
				id: product.id,
				preco: product.preco,
				quantidade: quantity
			})
		}

		setProdutos(tmpProducts)
	}

	function calcTotalPrice() {
		let total = 0

		produtos.map(requestProduct => {
			const listedProduct = productOptions.find(
				({id}) => id === requestProduct.id
			)
			if (!listedProduct) return

			const subtotal = requestProduct.quantidade * requestProduct.preco
			const st = (subtotal * listedProduct.st) / 100
			const ipi = (subtotal * listedProduct.ipi) / 100

			total += subtotal + st + ipi
		})

		if (Number.isNaN(total)) return 0

		return total
	}

	function calcTotalProductsPrice() {
		let total = 0

		produtos.map(requestProduct => {
			const subtotal = requestProduct.quantidade * requestProduct.preco
			total += subtotal
		})

		return total
	}

	function calcSubtotal(price: number, st: number, ipi: number) {
		const taxes = (price * st) / 100 + (price * ipi) / 100

		return price + taxes
	}

	function calcTotalQuantity() {
		let total = 0

		produtos.map(requestProduct => {
			total += requestProduct.quantidade
		})

		return total
	}

	function openProductModal(selected: ProductListedPriced) {
		setSelectedProduct(selected)
		setIsProductModalOpen(true)
	}

	function handleSelectContact(e: SelectOption) {
		setContactName(e.label)
		setContactPhone(e.value)
	}

	async function sendMails(requestId: string) {
		const text =
			'<h1>Pedido realizado com sucesso!</h1>' +
			`<p>O pedido feito no dia <strong>${formatDate(
				getDate()
			)}</strong> por <strong>${
				user.data ? user.data.name : 'um cliente no e-commerce'
			}</strong> foi salvo no sistema e o PDF está anexado neste e-mail.</p>` +
			'<br /><br />' +
			'<h2>Cruz Representações</h2>' +
			'<h3>Excelência em Representação Comercial!</h3>'

		const to = ['cruzrepresentacoes@gmail.com']
		if (user.data) to.push(user.data.email)

		const data = {
			text,
			to
		}

		await api
			.post(`/mail/requests/${requestId}/ecommerce`, data)
			.catch(error => console.error('< error sending mails >', error))
	}

	async function handleSubmit() {
		const contato = isAddingNewContact
			? {nome: newContactName, telefone: newContactPhone}
			: {nome: contactName, telefone: contactPhone}

		const data = {
			cliente: user.id,
			representada,
			contato,
			frete,
			produtos,
			data: getDate(),
			condicao,
			tipo: {venda: true, troca: false},
			status: {concluido: false, enviado: false, faturado: false}
		}

		api
			.post('requests', data)
			.then(({data}: {data: RequestRaw}) => {
				sucessAlert('Seu pedido foi realizado com sucesso!')
				push('/pedidos')

				sendMails(String(data._id))
			})
			.catch(err => {
				errorAlert(err.response.data.message)
			})

		if (isAddingNewContact && isSavingNewContact) {
			const data = {
				nome: newContactName,
				telefone: newContactPhone
			}

			api.post(`clients/${user.id}/contacts`, data)
		}
	}

	return (
		<Container step={step}>
			<SEOHead title="Novo pedido | Cruz Representações" />

			<RequestProductModal
				isOpen={isProductModalOpen}
				setIsOpen={setIsProductModalOpen}
				selected={selectedProduct}
			/>

			<header>
				<div className="group">
					<button className="cancel" onClick={cancel}>
						<FiX size={30} />
						<span>Cancelar</span>
					</button>
					<h1>Você está fazendo um novo pedido</h1>
					<div className="img">
						<Image src={logo} width={1000} height={1000} layout="responsive" />
					</div>
				</div>
				<div className="navigate">
					<button onClick={goBack} className="back">
						<FaAngleLeft size={25} />
						<span>Voltar</span>
					</button>

					<ul>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 1 ? '#CC9749' : '#E2DADB'}
							/>
						</svg>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 2 ? '#CC9749' : '#E2DADB'}
							/>
						</svg>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 3 ? '#CC9749' : '#E2DADB'}
							/>
						</svg>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 4 ? '#CC9749' : '#E2DADB'}
							/>
						</svg>
					</ul>

					<button onClick={goNext} className="next">
						<span>{step !== 4 ? 'Continuar' : 'Finalizar'}</span>
						<FaAngleRight size={25} />
					</button>
				</div>
			</header>

			{step === 1 && (
				<main>
					<h1>Escolha uma representada</h1>
					<div className="searchField">
						<FiSearch />
						<input
							type="text"
							name="search"
							value={companySearch}
							onChange={e => setCompanySearch(e.target.value)}
							placeholder="Pesquise por uma representada"
						/>
					</div>
					{companySearchedOptions.length === 0 && companyOptions.length !== 0 && (
						<div className="searchNotFound">
							<span>Nenhum resultado foi encontrado!</span>
						</div>
					)}
					<div className="grid">
						{companySearchedOptions.map((company, index) => {
							if (company.id === 'loading')
								return (
									<Card
										isSelected={false}
										type="company"
										onClick={() => {}}
										key={index}
									>
										<div className="img">
											<SkeletonLoading height="7.5rem" width="7.5rem" />
										</div>
										<h2>
											<SkeletonLoading height="2.5rem" width="20rem" />
										</h2>
										<h3>
											<SkeletonLoading height="2rem" width="15rem" />
										</h3>
									</Card>
								)
							else
								return (
									<Card
										isSelected={representada === company.id}
										type="company"
										onClick={() => handleSelectCompany(company)}
										key={index}
									>
										<div className="img">
											<img src={company.imagem} alt={company.nome_fantasia} />
										</div>
										<h2>{company.nome_fantasia}</h2>
										<h3>{company.descricao_curta}</h3>
									</Card>
								)
						})}
					</div>
				</main>
			)}

			{step === 2 && (
				<main>
					<h1>Escolha os produtos</h1>
					<div className="searchField">
						<FiSearch />
						<input
							type="text"
							name="search"
							value={productSearch}
							onChange={e => setProductSearch(e.target.value)}
							placeholder="Pesquise por um produto"
						/>
					</div>
					{productSearchedOptions.length === 0 && (
						<div className="searchNotFound">
							<span>Nenhum resultado foi encontrado!</span>
						</div>
					)}
					<div className="grid">
						{productSearchedOptions.map(product => {
							const selectedProduct = produtos.find(({id}) => id === product.id)

							const removeQuantity = selectedProduct
								? selectedProduct.quantidade - 1
								: 0
							const addQuantity = selectedProduct
								? selectedProduct.quantidade + 1
								: 1

							return (
								<Card
									isSelected={selectedProduct !== undefined}
									type="product"
									onClick={() => {}}
									key={product.id}
								>
									<button
										className="info"
										onClick={() => openProductModal(product)}
									>
										<FiInfo size={25} />
									</button>
									<div className="img">
										<img src={product.imagem} alt={product.nome} />
									</div>
									<h3>{product.nome}</h3>
									<span>{formatPrice(product.preco)}</span>
									<div className="field">
										<button
											onClick={() =>
												handleChangeProductQuantity(product, removeQuantity)
											}
										>
											<FiMinus size={25} />
										</button>
										<input
											id="quantidade"
											name="quantidade"
											type="number"
											value={selectedProduct ? selectedProduct.quantidade : 0}
											onChange={e =>
												handleChangeProductQuantity(
													product,
													Number(e.target.value)
												)
											}
										/>
										<button
											onClick={() =>
												handleChangeProductQuantity(product, addQuantity)
											}
										>
											<FiPlus size={25} />
										</button>
									</div>
								</Card>
							)
						})}
					</div>
				</main>
			)}

			{step === 3 && (
				<main>
					<h1>Escolha uma condição de pagamento</h1>
					<div className="group">
						<Select
							value={conditionSelectOptions.find(
								option => option.label === condicao
							)}
							options={conditionSelectOptions}
							onChange={e => setCondicao(e.value)}
							styles={selectStyles}
							placeholder="Condição de pagamento"
							isSearchable={false}
						/>
					</div>

					<h1>Escolha uma opção de frete</h1>
					<div className="group">
						<Select
							value={freteOptions.find(option => option.label === frete)}
							options={freteOptions}
							onChange={e => setFrete(e.value)}
							styles={selectStyles}
							placeholder="Frete"
							isSearchable={false}
						/>
					</div>

					<h1>Escolha uma opção de contato</h1>
					<div className="group">
						{!isAddingNewContact && (
							<>
								<Select
									value={contactSelectOptions.find(
										option => option.value === contactPhone
									)}
									options={contactSelectOptions}
									onChange={handleSelectContact}
									styles={selectStyles}
									placeholder="Contato"
									isSearchable={false}
								/>

								<button
									className="newContactButton"
									onClick={() => setIsAddingNewContact(true)}
								>
									<FiPlus />
									<span>Novo contato</span>
								</button>
							</>
						)}

						{isAddingNewContact && (
							<>
								<button
									className="newContactButton"
									onClick={() => setIsAddingNewContact(false)}
								>
									<FiX />
									<span>Cancelar</span>
								</button>

								<div className="newContactFields">
									<input
										type="text"
										name="nome"
										placeholder="Nome"
										value={newContactName}
										onChange={e => setNewContactName(e.target.value)}
									/>
									<input
										type="text"
										name="telefone"
										placeholder="Telefone"
										value={newContactPhone}
										onChange={e => setNewContactPhone(e.target.value)}
									/>
								</div>

								<div className="newContactSave">
									<Switch
										checked={isSavingNewContact}
										onChange={e => setIsSavingNewContact(e)}
									/>
									<span>Salvar contato</span>
								</div>
							</>
						)}
					</div>
				</main>
			)}

			{step === 4 && (
				<main>
					<h1>Confirme seu pedido</h1>
					<div className="group">
						<label>Representada</label>
						<span className="value">{selectedCompany.nome_fantasia}</span>
					</div>
					<div className="group productsContainer">
						<label>Produtos</label>
						<table className="products">
							<thead>
								<tr>
									<th className="product">Produto</th>
									<th className="small">Qtde.</th>
									<th className="large">Preço</th>
									<th className="small">ST</th>
									<th className="small">IPI</th>
									<th className="large">Subtotal</th>
								</tr>
							</thead>
							<tbody>
								{produtos.map((product, index) => {
									const pricedProduct = productOptions.find(
										({id}) => id === product.id
									)

									return (
										<tr key={index}>
											<td className="product">
												<div className="img">
													<img
														src={pricedProduct.imagem}
														alt={pricedProduct.nome}
													/>
												</div>

												<span>{pricedProduct.nome}</span>
											</td>
											<td className="small">{product.quantidade}</td>
											<td className="large">{formatPrice(product.preco)}</td>
											<td className="small">
												{formatPercentage(pricedProduct.st)}
											</td>
											<td className="small">
												{formatPercentage(pricedProduct.ipi)}
											</td>
											<td className="large">
												{formatPrice(
													calcSubtotal(
														product.preco,
														pricedProduct.st,
														pricedProduct.ipi
													)
												)}
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className="group">
						<label>Detalhes</label>
						<span className="value">
							<strong>Quantidade Total: </strong> {calcTotalQuantity()}
						</span>
						<span className="value">
							<strong>Valor Total em Produtos: </strong>{' '}
							{formatPrice(calcTotalProductsPrice())}
						</span>
						<span className="value">
							<strong>Valor Total: </strong> {formatPrice(calcTotalPrice())}
						</span>
						<span className="value">
							<strong>Condição de Pagamento: </strong> {condicao}
						</span>
						<span className="value">
							<strong>Data de Emissão: </strong> {formatDate(getDate())}
						</span>
					</div>
				</main>
			)}

			{step !== 1 && (
				<div id="totalPrice">
					<h3>Total:</h3>
					<span>{formatPrice(calcTotalPrice())}</span>
				</div>
			)}
		</Container>
	)
}

export default Pedido
