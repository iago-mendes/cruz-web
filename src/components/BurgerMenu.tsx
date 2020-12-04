import Container from '../styles/components/BurgerMenu'
import {Company} from './CompanyModal'

interface BurgerMenuProps
{
	isOpen: boolean
	width: number

	companies: Company[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isOpen, width, companies}) =>
{

	if (width > 1000)
		return null

	return (
		<Container isOpen={isOpen} >

		</Container>
	)
}

export default BurgerMenu