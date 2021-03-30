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

export interface CompanyRaw
{
	_id: string
	imagem: string
	razao_social: string
	nome_fantasia: string
	cnpj: string
	telefones: Array<string>
	email: string
	descricao_curta?: string
	descricao?: string
	site?: string
	comissao: {porcentagem: number, obs: Array<string>}
	tabelas: Array<{_id?: string, nome: string}>
	condicoes: Array<{_id?: string, nome: string, precoMin: number}>
	contatos: Array<{_id?: string, nome: string, telefone: string}>
	produtos: any[]
}

export default Company