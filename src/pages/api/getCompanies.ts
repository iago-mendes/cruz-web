import {NextApiHandler} from 'next'

import api from '../../services/api'

const getCompanies: NextApiHandler = async (req, res) =>
{
	const companies = await api.get('companies').then(res => res.data)

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(companies))
}

export default getCompanies