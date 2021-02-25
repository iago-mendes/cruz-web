import styled from 'styled-components'

interface ContainerProps
{
	showCatalogDropdown: boolean
}

const Container = styled.ul<ContainerProps>`
	width: 100%;
	height: fit-content !important;
	min-height: calc(100vh - 7.5rem);

	justify-content: flex-start !important;
	flex-direction: column;

	background-color: ${p => p.theme.colors.primary};

	padding: 5rem;

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

		::after
		{
			content: none !important;
		}
	}

	.dropdown
	{
		height: fit-content !important;
		flex-direction: column;
		gap: 1rem;

		.group svg
		{
			transform: ${p => p.showCatalogDropdown ? 'rotate(180deg)' : 'rotate(90deg)'} !important;
		}

		.catalog
		{
			position: static !important;
			box-shadow: none !important;

			background-color: ${p => p.theme.colors.primary};
			box-shadow: 0px 5px 5px black;

			width: 15rem;
			height: fit-content;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 2rem;
		}
	}
`

export default Container