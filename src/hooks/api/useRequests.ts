import {useEffect, useState} from 'react'

import useUser from '../useUser'
import api from '../../services/api'
import {RequestListed} from '../../models/request'

const defaultPaginate = {page: 1, total: 1}

const useRequests = () =>
{
	const {user} = useUser()

	const [requests, setRequests] = useState<RequestListed[]>([])
	const [paginate, setPaginate] = useState(defaultPaginate)
	const [loading, setLoading] = useState(true)
	
	useEffect(() =>
	{
		if (user.id !== 'not-logged')
			updateRequests()
	}, [user.id])

	async function updateRequests()
	{
		setLoading(true)

		let tmpRequests: RequestListed[] = []
		let tmpPaginate = {page: 1, total: 1}

		await api.get('requests', {params: {client: user.id, page: paginate.page}})
			.then(({data, headers}) =>
			{
				tmpRequests = data

				tmpPaginate =
				{
					page: Number(headers.page),
					total: Number(headers.totalpages)
				}
			})

		setRequests(tmpRequests)
		setPaginate(tmpPaginate)

		setLoading(false)
	}

	return {requests, loading, paginate, setPaginate}
}

export default useRequests