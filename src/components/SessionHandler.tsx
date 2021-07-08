import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';

import Loading from './Loading'
import Login from '../pages/login'
import {useAuth} from '../hooks/useAuth';

const SessionHandler: React.FC = ({children}) =>
{
	const {user, loading} = useAuth()
	const {pathname} = useRouter()
	const [route, setRoute] = useState('')

	const privateRoutes = ['pedidos', 'cliente']

	useEffect(() =>
	{
		const tmpRoute = pathname.split('/')[1]
		setRoute(tmpRoute)
	}, [pathname])


	if (route !== '')
	{
		if (loading)
			return <Loading style={{marginTop: '45vh'}} />

		if (privateRoutes.includes(route) && !user)
			return <Login />
	}

	return (
		<>
			{children}
		</>
	)
}

export default SessionHandler