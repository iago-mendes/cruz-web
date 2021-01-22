import {FiArrowLeft} from 'react-icons/fi'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {signIn} from 'next-auth/client'
import Image from 'next/image'

import illustration from '../assets/illustration2.svg'
import logo from '../assets/logo.svg'
import Container from '../styles/pages/login'
import useUser from '../hooks/useUser'

export default function Login()
{
	const {user} = useUser()
	const router = useRouter()

	const [height, setHeight] = useState(1000)
	const [width, setWidth] = useState(1500)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showedError, setShowedError] = useState(false)


	useEffect(() =>
	{
		if (window)
		{
			setHeight(window.innerHeight)
			setWidth(window.innerWidth)
		}
	}, [])

	useEffect(() =>
	{
		if (user.errorMessage && !showedError)
		{
			setShowedError(true)
			alert(user.errorMessage)
		}

		if (user.id !== 'not-logged' && router.pathname === '/login')
			router.back()
	}, [user])
	
	function handleChange(e: ChangeEvent<HTMLInputElement>)
	{
		if (e.target.name === 'email') setEmail(e.target.value)
		if (e.target.name === 'password') setPassword(e.target.value)
	}
	
	async function handleSubmit(e: FormEvent)
	{
		e.preventDefault()
		signIn('credentials', {email, password})
	}

	return (
		<Container className='container'>
			<Head>
				<title>Entrar | Cruz Representações</title>
			</Head>

			<main>
				<div className="left">
					<form onSubmit={handleSubmit}>
						<div className="fieldInput">
							<label htmlFor="email">E-mail</label>
							<input
							value={email}
							onChange={handleChange}
							type="text"
							name="email"
							id="email"
							placeholder="Digite seu e-mail"
							/>
						</div>
						<div className="fieldInput">
							<label htmlFor="password">Senha</label>
							<input
							value={password}
							onChange={handleChange}
							type="password"
							name="password"
							id="password"
							placeholder="Digite sua senha"
							/>
						</div>
						<button type="submit">Entrar</button>
					</form>
					<div className="illustration">
						<Image src={illustration} alt="Homem apontando para formulário" width={275} height={350} priority />
					</div>
				</div>
				<div className="right">
					<div className="firstRow">
						<h1>Entre em sua conta para acessar as funções deste site.</h1>
							<button title="Voltar" onClick={router.back}>
							<FiArrowLeft />
						</button>
					</div>
					<div className="secondRow">
						<Image src={logo} alt="Cruz representações" width={300} height={300} layout='intrinsic' priority />
					</div>
					<div className="thirdRow">
						<h2>Ainda não está em nosso sistema? Entre em contato conosco!<br/>Clique <Link href="/contato">aqui</Link> para visualizar as opções de contato.</h2>
					</div>
				</div>
			</main>
		</Container>
	)
}