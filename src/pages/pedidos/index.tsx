import Head from 'next/head'
import {useEffect, useState} from 'react'
import useSWR from 'swr'

import Container from '../../styles/pages/pedidos/index'
import {RequestListed} from '../../models/request'
import useUser from '../../hooks/useUser'
import GridPaginate from '../../components/GridPaginate'

const Requests: React.FC = () =>
{
	const {user} = useUser()

	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [loading, setLoading] = useState(true)

	const {data, error, revalidate} = useSWR(`/api/requests?client=${user.id}&page=${page}`)
	const [requests, setRequests] = useState<RequestListed[]>([])

	useEffect(() =>
	{
		if (data)
		{
			setRequests(data.requests)
			setPage(data.paginate.page)
			setTotalPages(data.paginate.total)
		}
		else if (error)
		{
			setRequests([])
			setPage(1)
			setTotalPages(1)

			console.error(error)
		}
	}, [data, error])

	useEffect(() =>
	{
		revalidate()

		if (page === 1)
			setRequests([])
		else
			setLoading(true)
	}, [page])

	useEffect(() =>
	{
		setLoading(false)
	}, [requests])

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