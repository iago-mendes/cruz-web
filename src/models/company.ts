export interface CompanyListed
{
	id: string
	imagem: string
	nome_fantasia: string
	descricao_curta: string
}

export const defaultCompanyListed: CompanyListed =
{
	id: '',
	imagem: '',
	nome_fantasia: '',
	descricao_curta: ''
}