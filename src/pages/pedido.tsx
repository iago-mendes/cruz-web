import Head from 'next/head'
import {useState} from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'

import Container from '../styles/pages/pedido'
import logo from '../assets/logo.svg'
import Image from 'next/image'

const Pedido: React.FC = () =>
{
	const router = useRouter()

	const [step, setStep] = useState(0)

	function goBack()
	{
		if (step > 0)
			setStep(step - 1)
	}

	function goNext()
	{
		if (step < 4)
			setStep(step + 1)
	}

	const Step: React.FC = () =>
	{
		switch (step)
		{
			case 0:
				return (
					<main>welcome</main>
				)
			case 1:
				return (
					<main>company</main>
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
							<circle cx={5} cy={5} r={5} fill={step >= 0 ? '#CC9749' : '#E2DADB'} />
						</svg>
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