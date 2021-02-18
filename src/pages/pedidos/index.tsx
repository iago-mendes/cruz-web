import Head from 'next/head'
import {useEffect, useState} from 'react'

import Container from '../../styles/pages/pedidos/index'
import {RequestListed} from '../../models/request'
import useUser from '../../hooks/useUser'
import api from '../../services/api'
import GridPaginate from '../../components/GridPaginate'

const Requests: React.FC = () =>
{
	const {user} = useUser()

	const [requests, setRequests] = useState<RequestListed[]>([])
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [loading, setLoading] = useState(false)

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

			<GridPaginate
				cardWidth={300}
				cardHeight={300}

				page={page}
				setPage={setPage}
				totalPages={totalPages}

				loading={loading}
				noResults={false}
			>
				{requests.map(request => (
					<div className="request">
						<h1>{request.data}</h1>
						<h2>{request.representada.nome_fantasia}</h2>
					</div>
				))}
			</GridPaginate>
		</Container>
	)
}

export default Requests