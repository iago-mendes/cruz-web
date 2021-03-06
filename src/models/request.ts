export interface RequestListed {
	id: string
	data: string
	cliente: {
		imagem: string
		nome_fantasia: string
		razao_social: string
	}
	vendedor: {
		imagem: string
		nome: string
	}
	representada: {
		imagem: string
		nome_fantasia: string
		razao_social: string
	}
	tipo: {
		venda: boolean
		troca: boolean
	}
	status: {
		concluido: boolean
		enviado: boolean
		faturado: boolean
	}
	valorTotal: number
}

export interface RequestProduct {
	id: string
	quantidade: number
	preco: number
}

export interface RequestRaw {
	contato: {
		nome: string
		telefone: string
	}
	tipo: {
		venda: boolean
		troca: boolean
	}
	status: {
		concluido: boolean
		enviado: boolean
		faturado: boolean
	}
	_id: string
	data: string
	condicao: string
	cliente: string
	representada: string
	frete: string
	produtos: Array<{
		id: string
		preco: number
		quantidade: number
	}>
}
