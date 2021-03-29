import {FaRegEye} from 'react-icons/fa'

import Container from '../../styles/pages/pedidos/index'
import GridPaginate from '../../components/GridPaginate'
import useRequests from '../../hooks/api/useRequests'
import formatDate from '../../utils/formatDate'
import SEOHead from '../../components/SEOHead'
import {apiUrl} from '../../services/api'

const Requests: React.FC = () =>
{
	const {requests, loading, paginate, setPaginate} = useRequests()

	return (
		<Container className='page' >
			<SEOHead
				title='Meus pedidos | Cruz Representações'
			/>

			<GridPaginate
				cardWidth={400}
				cardHeight={300}

				paginate={paginate}
				setPaginate={setPaginate}

				loading={loading}
				noResults={false}
			>
				{requests.map((request, index) => (
					<div className='request' key={index} >
						<div className='header'>
							<div className='typeDate'>
								{request.tipo.venda && (
									<span style={{backgroundColor: '#357435'}} >
										venda
									</span>
								)}
								{request.tipo.troca && (
									<span style={{backgroundColor: '#2b2b68'}} >
										troca
									</span>
								)}
								<h2>{formatDate(request.data)}</h2>
							</div>
							<a
								title='Visualizar pedido'
								href={`${apiUrl}/pdf/requests/${request.id}`}
								target='_blank'
								rel='nonreferrer'
							>
								<FaRegEye />
								<span>
									Visualizar
								</span>
							</a>
						</div>
						<ul className='info' >
							<li>
								<div className='imgName'>
									<img src={request.representada.imagem} alt={request.representada.nome_fantasia}/>
									<h1>{request.representada.nome_fantasia}</h1>
								</div>
								<div className='description'>
									<h2>{request.representada.razao_social}</h2>
								</div>
							</li>
							<li>
								<div className='imgName'>
									<img src={request.vendedor.imagem} alt={request.vendedor.nome}/>
									<h1>{request.vendedor.nome}</h1>
								</div>
							</li>
						</ul>
					</div>
				))}
			</GridPaginate>
		</Container>
	)
}

export default Requests