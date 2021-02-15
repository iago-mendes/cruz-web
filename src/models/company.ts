interface Company
{
  id: string
  imagem: string
  nome_fantasia: string
  descricao: string
  site: string
}

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

export interface CompanyCondition
{
	nome: string
	precoMin: number
}

export default Company