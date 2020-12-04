import styled from 'styled-components'

interface ContainerProps
{
	isOpen: boolean
}

const Container = styled.nav<ContainerProps>`
	position: absolute;
	z-index: 100;
	top: 6.75rem;
	
	height: calc(100vh - 6.75rem);
	width: 100%;
	
	background-color: ${p => `${p.theme.colors.primaryDark}f2`};

	right: ${p => p.isOpen ? '0' : '-100vw'};
	transition: 0.5s;
`

export default Container