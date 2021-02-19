export interface Paginate
{
	page: number
	total: number
}

export const defaultPaginate: Paginate =
{
	page: 1,
	total: 1
}