import {CompanyCondition} from './company';

export interface ClientConditions
{
	vista: boolean
	cheque: boolean
	prazo: boolean
	prazoOpcoes: CompanyCondition[]
}

export const defaultCientConditions: ClientConditions =
{
	vista: true,
	cheque: true,
	prazo: false,
	prazoOpcoes: []
}