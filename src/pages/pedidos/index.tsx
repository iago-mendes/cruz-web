import Head from 'next/head'

import Container from '../../styles/pages/pedidos/index'
import GridPaginate from '../../components/GridPaginate'
import useRequests from '../../hooks/api/useRequests'

const Requests: React.FC = () =>
{
	const {requests, loading, paginate, setPaginate} = useRequests()

	return (
		<Container className='page' >
			<Head>
				<title>Requests</title>
			</Head>

			<GridPaginate
				cardWidth={300}
				cardHeight={300}

				paginate={paginate}
				setPaginate={setPaginate}

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