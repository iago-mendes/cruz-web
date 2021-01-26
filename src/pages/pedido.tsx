import Head from 'next/head'
import {useEffect, useState} from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'

import Container, {Card} from '../styles/pages/pedido'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import useUser from '../hooks/useUser'
import api from '../services/api'
import {CompanyListed} from '../models/company'

const Pedido: React.FC = () =>
{
	const {user} = useUser()
	const router = useRouter()

	const [step, setStep] = useState(1)
	const [representada, setRepresentada] = useState('')

	const [companyOptions, setCompanyOptions] = useState<CompanyListed[]>([])

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

	function goBack()
	{
		if (step > 1)
			setStep(step - 1)
	}

	function goNext()
	{
		if (step === 1 && representada === '')
			alert('Você precisa selecionar uma representada para continuar.')
		else if (step < 4)
			setStep(step + 1)
	}

	function handleSelectCompany(id: string)
	{
		if (id === representada)
			setRepresentada('')
		else
			setRepresentada(id)
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
					<main>products</main>
				)
			case 3:
				return (
					<main>details</main>
				)
			case 4:
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

			<Step />
		</Container>
	)
}

export default Pedido