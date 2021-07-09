import {FiArrowLeft} from 'react-icons/fi'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import Image from 'next/image'

import illustration from '../assets/images/illustration2.svg'
import logo from '../assets/images/logo.svg'
import Container from '../styles/pages/login'
import {useAuth} from '../hooks/useAuth'
import LoadingModal from '../components/modals/Loading'
import SEOHead from '../components/SEOHead'

export default function Login() {
	const {user, signIn, loading} = useAuth()
	const router = useRouter()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (user && router.pathname === '/login') router.back()
	}, [user])

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.name === 'email') setEmail(e.target.value)
		if (e.target.name === 'password') setPassword(e.target.value)
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()

		await signIn(email, password)
	}

	return (
		<Container className="container">
			<SEOHead title="Entrar | Cruz Representações" />

			<LoadingModal isOpen={loading} />

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
						<Image
							src={illustration}
							alt="Homem apontando para formulário"
							width={275}
							height={350}
							priority
						/>
					</div>
				</div>
				<div className="right">
					<div className="firstRow">
						<h1>
							Entre em sua conta para acessar as funções do nosso E-Commerce.
						</h1>
						<button title="Voltar" onClick={router.back}>
							<FiArrowLeft />
						</button>
					</div>
					<div className="secondRow">
						<Image
							src={logo}
							alt="Cruz representações"
							width={300}
							height={300}
							layout="intrinsic"
							priority
						/>
					</div>
					<div className="thirdRow">
						<p>
							Ainda não está em nosso sistema? Entre em contato conosco!
							<br />
							Clique <Link href="/contato">aqui</Link> para visualizar as opções
							de contato.
						</p>
					</div>
				</div>
			</main>
		</Container>
	)
}
