import {useSession} from "next-auth/client"
import {useEffect, useState} from "react"

export interface User
{
	id: string
	role: string

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
			const {user: tmpUser}:{user: any} = session
			setUser(tmpUser)
		}
		if (!session)
			setUser(defaultUser)
	}, [loading, session])

	useEffect(() =>
	{
		if (user.errorMessage)
			alert(user.errorMessage)
	}, [user.errorMessage])

	return {user, loading}
}

export default useUser