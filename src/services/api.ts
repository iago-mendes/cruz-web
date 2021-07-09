import axios from 'axios'

let token: string | undefined

try {
	token = localStorage.getItem('token')
} catch (error) {
	token = undefined
}

const api = axios.create(
{
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers:
	{
		key: process.env.NEXT_PUBLIC_API_KEY,
		authorization: `Bearer ${token}`
	}
})

export const apiUrl = String(process.env.NEXT_PUBLIC_API_URL)

export default api