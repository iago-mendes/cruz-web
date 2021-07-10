import axios from 'axios'

export const apiUrl = String(process.env.NEXT_PUBLIC_API_URL)

const api = axios.create({
	baseURL: apiUrl,
	headers: {
		key: process.env.NEXT_PUBLIC_API_KEY
	}
})

api.interceptors.request.use(config => {
	let token: string | undefined

	try {
		token = localStorage.getItem('token')
	} catch (error) {
		token = undefined
	}

	config.headers.authorization = `Bearer ${token}`

	return config
})

export default api
