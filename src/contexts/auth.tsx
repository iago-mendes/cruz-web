import {ReactNode, useEffect, useState, createContext} from 'react'
import jwt from 'jsonwebtoken'

import api from '../services/api'
import errorAlert from '../utils/alerts/error'

type User = {
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
}

type AuthContextType = {
	user: User | undefined
	loading: boolean
	signIn: (email: string, password: string) => Promise<void>
	signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

type AuthContextProviderProps = {
	children: ReactNode
}

export function AuthProvider({children}: AuthContextProviderProps) {
	const [user, setUser] = useState<User>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const token = localStorage.getItem('token')
		updateUser(token)
		setLoading(false)
	}, [])

	function updateUser(token: any) {
		if (!token) return setUser(undefined)

		const payload = jwt.decode(token)
		const {id, role} = typeof payload === 'string' ? JSON.parse(payload) : payload

		if (id && role) {
			setUser({id, role})
		}
	}

	async function signIn(email: string, password: string) {
		setLoading(true)
		const data = {email, password}

		await api.post('login/client', data)
			.then(({data}) => {
				const {token} = data
				if (!token) return

				localStorage.setItem('token', token)
				updateUser(token)
			})
			.catch(error =>
			{
				const errorMessage = String(error.response.data.message || '')
				errorAlert(errorMessage)
			})
		
		setLoading(false)
	}

	function signOut() {
		updateUser(undefined)
		localStorage.removeItem('token')
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				signIn,
				signOut
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
