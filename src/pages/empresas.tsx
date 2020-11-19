import {useSession} from 'next-auth/client'
import Loading from '../components/Loading'
import NotLogged from '../components/NotLogged'

import Container from '../styles/pages/empresas'

const Companies = () =>
{
	const [session, loading] = useSession()

	if (loading) return <Loading />
	if (!session) return <NotLogged />

	return (
		<Container>
			<h1>Empresas</h1>
		</Container>
	)
}

export default Companies