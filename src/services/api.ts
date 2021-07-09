import axios from 'axios'
import getConfig from 'next/config'

const {publicRuntimeConfig: env} = getConfig()

let token: string | undefined

try {
	token = localStorage.getItem('token')
} catch (error) {
	token = undefined
}

const api = axios.create(
{
	baseURL: env.apiUrl,
	headers:
	{
		key: env.apiKey,
		authorization: `Bearer ${token}`
	}
})

export const apiUrl = String(env.apiUrl)

export default api