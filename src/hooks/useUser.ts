import {useSession} from 'next-auth/client'
import {useEffect, useState} from 'react'
import api from '../services/api'

export interface User
{
	id: string
	role: string

	data?:
	{
		name: string
		image: string
		email: string
	}
	
	errorMessage?: string
	errorId?: number
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
			const {user: tmp}:{user: any} = session
			const tmpUser: User = tmp

			if (tmpUser && user.id !== tmpUser.id)
				setUser(tmpUser)
			// else if (tmpUser.errorMessage && user.errorId !== tmpUser.errorId)
			// {
			// 	console.log('[error]', tmpUser.errorMessage)

			// 	console.log('[user.errorId]', user.errorId)
			// 	console.log('[tmpUser.errorId]', tmpUser.errorId)

			// 	let tmp = {...user}
			// 	tmp.errorMessage = tmpUser.errorMessage
			// 	tmp.errorId = tmpUser.errorId

			// 	setUser(tmp)
			// }
		}
		if (!session)
			setUser(defaultUser)
	}, [loading, session])

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

				setUser(tmpUser)
			})
	}, [user.id])

	return {user, loading}
}

export default useUser