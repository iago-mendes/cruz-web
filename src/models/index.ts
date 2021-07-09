export interface Paginate {
	page: number
	total: number
}

export const defaultPaginate: Paginate = {
	page: 1,
	total: 1
}

export interface SelectOption {
	label: string
	value: string
}
