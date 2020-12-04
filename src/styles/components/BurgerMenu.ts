import styled from 'styled-components'

interface ContainerProps
{
	isOpen: boolean
	showDropdown: boolean
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

	display: flex;
	align-items: center;
	justify-content: center;

	ul
	{
		flex-direction: column;
		justify-content: center;

		margin: 0;
		width: 100%;
		height: 100%;
		padding: 5rem;

		.link
		{
			font-size: 2.5rem;
			width: 100%;
			padding: 3rem;

			border-top: ${p => p.theme.colors.secondary} 1px solid;
		}

		.group
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			border: none;

			.block
			{
				color: ${p => p.theme.colors.secondary};
				text-decoration: none;
				font-size: 2.5rem;
				transition: 0.25s;

				border-width: 1px;
				border-style: solid;
				border-color: ${p => p.theme.colors.secondary};
				padding: 1rem;
				border-radius: 100px;

				:hover
				{
					background-color: ${p => p.theme.colors.secondary};
					color: ${p => p.theme.colors.primary};
				}
			}

			.user
			{
				background-color: #C4C4C4;

				width: 6rem;
				height: 6rem;
				border-radius: 100rem;
				padding: 1rem;

				display: flex;
				align-items: center;
				justify-content: center;

				transition: 0.25s;

				:hover
				{
					transform: scale(1.1);
				}
			}
		}

		.dropdown
		{
			height: fit-content;

			flex-direction: column;

			.header
			{
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 2rem;

				svg
				{
					transition: 0.5s;

					${p => p.showDropdown && 'transform: rotate(90deg);'}
				}
			}

			ul
			{
				position: initial;
				background: none;

				transition: 0.5s;
				height: ${p => p.showDropdown ? 'fit-content' : '0'};
				opacity: ${p => p.showDropdown ? '1' : '0'};

				width: 80%;
			}
		}
	}
`

export default Container