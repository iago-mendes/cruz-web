import {useSession} from "next-auth/client"
import {useEffect, useState} from "react"

interface User
{
	id: string
	role: string
}

const defaultUser: User =
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

	return {user, loading}
}

export default useUser