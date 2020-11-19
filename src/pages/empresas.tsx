import {signIn, useSession} from 'next-auth/client'

const Companies = () =>
{
	const [session, loading] = useSession()

	if (loading) return <h1>Carregando...</h1>
	if (!session) return (
		<div>
			<h1>Você não está logado!</h1>
			<button onClick={() => signIn()}>Entrar</button>
		</div>
	)

	return <h1>Empresas</h1>
}

export default Companies