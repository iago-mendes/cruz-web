import Head from "next/head";

import Container from '../styles/pages/contato'

export default function Contact()
{
	return (
		<Container className='container'>
			<Head>
				<title>Contato | Cruz Representações</title>
			</Head>

			<div className="scrollable">
				<form>
					<h1>E-mail</h1>
					<p>Para entrar em contato conosco por e-mail, use o formulário abaixo ou envie um e-mail para <a href="mailto:cruzrepresentacoes@gmail.com">cruzrepresentacoes@gmail.com</a>.</p>
					<input type="text" name="email" placeholder="E-mail"/>
					<input type="text" name="name" placeholder="Nome"/>
					<input type="text" name="city" placeholder="Cidade"/>
					<input type="text" name="subject" placeholder="Assunto"/>
					<textarea name="message" cols={30} rows={5} placeholder="Mensagem" />
					<button type="submit">Enviar</button>
				</form>

				<div className="phones">
					<h1>Telefones</h1>
					<p>Para entrar em contato conosco por telefone, use algum dos números abaixo.</p>
					<h2>(38) 9 9985-6208</h2>
					<h2>(38) 9 9999-9999</h2>
				</div>
			</div>
		</Container>
	)
}