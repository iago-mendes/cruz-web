import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';

import Loading from './Loading'
import Login from '../pages/login'
import useUser from '../hooks/useUser';

const SessionHandler: React.FC = ({children}) =>
{
	const {user, loading} = useUser()
	const {pathname} = useRouter()
	const [route, setRoute] = useState('')

	const privateRoutes = ['empresas', 'catalogo']

	useEffect(() =>
	{
		const tmpRoute = pathname.split('/')[1]
		setRoute(tmpRoute)
	}, [pathname])


	if (route !== '')
	{
		if (loading)
			return <Loading />

		if (privateRoutes.includes(route) && user)
			return <Login />
	}

	return (
		<>
			{children}
		</>
	)
}

export default SessionHandler