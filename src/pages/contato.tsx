import {useState} from 'react';

import Container from '../styles/pages/contato'
import SEOHead from '../components/SEOHead';
import warningAlert from '../utils/alerts/warning';
import api from '../services/api';
import sucessAlert from '../utils/alerts/sucess';
import errorAlert from '../utils/alerts/error';

export default function Contact()
{
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [city, setCity] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	function sendMail()
	{
		if (email === '' || name === '' || city === '' || subject === '' || message === '')
		{
			return warningAlert('Você precisa preencher todos os campos!')
		}

		const mailSubject = `Mensagem do E-commerce: ${subject}`
		const text =
		`<h3>E-mail</h3>
		${email}

		<h3>Nome</h3>
		${name}

		<h3>Cidade</h3>
		${city}

		<h3>Assunto</h3>
		${subject}

		<h3>Mensagem</h3>
		${message}`
		
		const data =
		{
			to: ['cruzrepresentacoes@gmail.com'],
			subject: mailSubject,
			text
		}

		api.post('/mail', data)
			.then(() =>
			{
				sucessAlert('E-mail enviado com sucesso!')

				setEmail('')
				setName('')
				setCity('')
				setSubject('')
				setMessage('')
			})
			.catch(error =>
			{
				errorAlert(error.response.data.message)
			})
	}

	return (
		<Container className='page' >
			<SEOHead
				title='Contato | Cruz Representações'
			/>

			<div className='scrollable'>
				<form onSubmit={e => e.preventDefault()} >
					<h1>E-mail</h1>
					<p>Para entrar em contato conosco por e-mail, use o formulário abaixo ou envie um e-mail para <a href='mailto:contato@cruzrepresentacoes.com.br'>contato@cruzrepresentacoes.com.br</a></p>

					<input
						type='text'
						name='email'
						placeholder='E-mail'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='text'
						name='name'
						placeholder='Nome'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type='text'
						name='city'
						placeholder='Cidade'
						value={city}
						onChange={e => setCity(e.target.value)}
					/>
					<input
						type='text'
						name='subject'
						placeholder='Assunto'
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>
					<textarea
						name='message'
						cols={30}
						value={message}
						onChange={e => setMessage(e.target.value)}
						rows={5}
						placeholder='Mensagem'
					/>
					<button type='submit' onClick={sendMail}>
						Enviar
					</button>
				</form>

				<div className='phones'>
					<h1>Telefones</h1>
					<p>Para entrar em contato conosco por telefone, use algum dos números abaixo.</p>
					<h2>(38) 9 9985-6208</h2>
					<h2>(38) 9 9986-6208</h2>
				</div>
			</div>
		</Container>
	)
}