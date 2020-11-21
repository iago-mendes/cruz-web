import Head from 'next/head'

import Container from '../../styles/pages/catalogo/index'

const Catalog: React.FC = () =>
{
	return (
		<Container>
			<Head>
				<title>Catálogo | Cruz Representações</title>
			</Head>
			<h1>Catálogo</h1>
		</Container>
	)
}

export default Catalog