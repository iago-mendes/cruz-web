import {CompanyCondition} from './company'

interface Client {
	// show
	id: string
	imagem: string
	razao_social: string
	nome_fantasia: string
	cnpj: string
	insc_estadual: string
	telefone: number
	email: string
	endereco: {
		rua: string
		numero: number
		bairro: string
		cep: number
		cidade: string
		uf: string
	}
	status: {
		ativo: boolean
		aberto: boolean
		nome_sujo: boolean
	}
	representadas: Array<{
		id: string
		nome_fantasia: string
		tabela: string
	}>
}

export interface ClientConditions {
	vista: boolean
	cheque: boolean
	prazo: boolean
	prazoOpcoes: CompanyCondition[]
}

export const defaultCientConditions: ClientConditions = {
	vista: true,
	cheque: true,
	prazo: false,
	prazoOpcoes: []
}

export default Client
