import {NextApiHandler} from 'next'

import api from '../../services/api'

const posts: NextApiHandler = async (req, res) =>
{
	const {page, client} = req.query
	if (client === 'not-logged')
		return res.end()

	const {data, headers} = await api.get('requests', {params: {client, page}})

	const paginate =
	{
		page: Number(headers.page),
		total: Number(headers.totalpages)
	}

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({requests: data, paginate}))
}

export default posts