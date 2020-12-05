import {useSession} from "next-auth/client";
import {useRouter} from 'next/router'
import {useEffect, useState} from "react";

import Loading from './Loading'
import Login from '../pages/login'

const LoginHandler: React.FC = ({children}) =>
{
	const [session, loading] = useSession()
	const Router = useRouter()
	const [isPrivate, setIsPrivate] = useState(false)

	const privateList = ['empresas', 'catalogo']

	useEffect(() =>
	{
		const route = Router.pathname.split('/')[1]
		if (route !== '' && privateList.includes(route))
			setIsPrivate(true)
		else
			setIsPrivate(false)
	}, [Router])

	if (loading)
		return <Loading />

	if (isPrivate && !session)
		return <Login />

	return (
		<>
			{children}
		</>
	)
}

export default LoginHandler