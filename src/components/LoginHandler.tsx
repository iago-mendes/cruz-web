import {useSession} from "next-auth/client";
import {useRouter} from 'next/router'
import {useEffect, useState} from "react";

import Loading from './Loading'
import Login from '../pages/login'

const LoginHandler: React.FC = ({children}) =>
{
	const [session, loading] = useSession()
	const Router = useRouter()
	// const [isPrivate, setIsPrivate] = useState(false)
	const [route, setRoute] = useState('')

	const privateRoutes = ['empresas', 'catalogo']

	useEffect(() =>
	{
		const tmp = Router.pathname.split('/')[1]
		setRoute(tmp)
		// if (route !== '' && privateList.includes(route))
		// 	setIsPrivate(true)
		// else
		// 	setIsPrivate(false)
	}, [Router])


	if (route !== '')
	{
		if (loading)
			return <Loading />

		if (privateRoutes.includes(route) && !session)
			return <Login />
	}

	return (
		<>
			{children}
		</>
	)
}

export default LoginHandler