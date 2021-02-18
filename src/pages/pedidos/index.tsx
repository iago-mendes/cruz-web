import Head from 'next/head'
import {useEffect, useState} from 'react'

import Container from '../../styles/pages/pedidos/index'
import {RequestListed} from '../../models/request'
import useUser from '../../hooks/useUser'
import api from '../../services/api'

const Requests: React.FC = () =>
{
	const {user} = useUser()
	const [requests, setRequests] = useState<RequestListed[]>([])

	useEffect(() =>
	{
		if (user.id !== 'not-logged')
			api.get('requests', {params: {client: user.id}})
				.then(({data}:{data: RequestListed[]}) =>
				{
					setRequests(data)
				})
	}, [user.id])

	return (
		<Container className='page' >
			<Head>
				<title>Requests</title>
			</Head>

			<main>
				{requests.map(request => (
					<div className="request">
						<h1>{request.data}</h1>
						<h2>{request.representada.nome_fantasia}</h2>
					</div>
				))}
			</main>
		</Container>
	)
}

export default Requests