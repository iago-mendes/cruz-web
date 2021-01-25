import Head from 'next/head'
import { useState } from 'react'

import Container from '../styles/pages/pedido'

const Pedido: React.FC = () =>
{
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
		<Container>
			<Head>
				<title>Pedido</title>
			</Head>
			<header>
				<button onClick={goBack}>
					Voltar
				</button>

				<button onClick={goNext}>
					Continuar
				</button>
			</header>

			<Step />
		</Container>
	)
}

export default Pedido