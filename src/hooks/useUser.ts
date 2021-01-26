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
		
		representadas: Array<
		{
			id: string
			nome_fantasia: string
			tabela: string
		}>
	}
	
	errorMessage?: string
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
			else if (tmpUser.errorMessage)
			{
				let tmp = {...user}
				tmp.errorMessage = tmpUser.errorMessage
				setUser(tmp)
			}
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
					email: data.email,
					representadas: data.representadas
				}

				setUser(tmpUser)
			})
	}, [user.id])

	return {user, loading}
}

export default useUser