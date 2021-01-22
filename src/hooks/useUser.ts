import {useSession} from 'next-auth/client'
import {useEffect, useState} from 'react'
import api from '../services/api'

export interface User
{
	id: string
	role: string

	errorMessage?: string

	data?:
	{
		name: string
		image: string
		email: string
	}
}

export const defaultUser: User =
{
	id: 'not-logged',
	role: 'none'
}

function useUser()
{
	const [session, loading] = useSession()
	const [user, setUser] = useState<User>(defaultUser)

	useEffect(() =>
	{
		if (!loading && session)
		{
			const {user: tmpSession}:{user: any} = session

			if (user.id !== tmpSession.user.id)
				setUser(tmpSession.user)
		}
		if (!session)
			setUser(defaultUser)
	}, [loading, session])

	useEffect(() =>
	{
		if (user.errorMessage)
			alert(user.errorMessage)
	}, [user.errorMessage])

	useEffect(() =>
	{
		if (user.id && user.id !== 'not-logged')
			api.get(`clients/${user.id}`).then(({data}) =>
			{
				let tmpUser = {...user}

				tmpUser.data =
				{
					name: data.nome_fantasia,
					image: data.imagem,
					email: data.email
				}

				console.log('[tmpUser]', tmpUser)

				setUser(tmpUser)
			})
	}, [user.id])

	return {user, loading}
}

export default useUser