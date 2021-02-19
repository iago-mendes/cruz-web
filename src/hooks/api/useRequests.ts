import {useEffect, useState} from 'react'

import useUser from '../useUser'
import api from '../../services/api'
import {RequestListed} from '../../models/request'
import {defaultPaginate, Paginate} from '../../models'

const useRequests = () =>
{
	const {user} = useUser()

	const [requests, setRequests] = useState<RequestListed[]>([])
	const [paginate, setPaginate] = useState<Paginate>(defaultPaginate)
	const [loading, setLoading] = useState(true)
	
	useEffect(() =>
	{
		if (user.id !== 'not-logged')
			updateRequests()
	}, [user.id])

	async function updateRequests()
	{
		setLoading(true)
		
		const {data, headers} = await api.get('requests', {params: {client: user.id, page: paginate.page}})
		
		
		let tmpRequests: RequestListed[] = data || []
		const tmpPaginate =
		{
			page: Number(headers.page) || 1,
			total: Number(headers.totalpages) || 1
		}

		setRequests(tmpRequests)
		setPaginate(tmpPaginate)

		setLoading(false)
	}

	return {requests, loading, paginate, setPaginate}
}

export default useRequests