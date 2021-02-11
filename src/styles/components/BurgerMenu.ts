import styled from 'styled-components'

interface ContainerProps
{
	showCatalogDropdown: boolean
}

const Container = styled.ul<ContainerProps>`
	width: 100%;
	min-height: calc(100vh - 7.5rem);

	justify-content: flex-start !important;
	flex-direction: column;

	background-color: ${p => p.theme.colors.primary};

	padding: 5rem;

	.user
	{
		height: fit-content !important;

		::before
		{
			content: none !important;
		}
	}

	.row
	{
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		::before
		{
			content: '';

			width: 100%;
			height: 3px;
			margin-bottom: 3rem;

			display: block;
			background: ${p => p.theme.colors.secondary};
			border-radius: 100rem;
		}
	}

	.dropdown
	{
		height: fit-content !important;
		flex-direction: column;

		.group svg
		{
			transform: ${p => p.showCatalogDropdown ? 'rotate(180deg)' : 'rotate(90deg)'} !important;
		}

		ul
		{
			position: static !important;
		}
	}
`

export default Container