import styled from 'styled-components'

interface ContainerProps
{
	showBurgerDropdown: boolean
}

const Container = styled.nav<ContainerProps>`
	position: absolute;
	z-index: 100;
	top: 7.5rem;
	
	height: calc(100% - 7.5rem);
	width: 100%;
	
	background-color: ${p => `${p.theme.colors.primaryDark}f2`};

	transition: 0.5s;

	overflow-y: auto;

	*
	{
		text-shadow: none;
	}

	ul
	{
		flex-direction: column;
		justify-content: center;

		margin: 0;
		width: 100%;
		min-height: 100%;
		padding: 5rem;
		padding-top: 10rem;
		padding-bottom: 10rem;

		.link
		{
			font-size: 2.5rem;
			width: 100%;
			padding: 0;
			padding-top: 3rem;
			padding-bottom: 3rem;

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

		.burguerDropdown
		{
			height: fit-content;
			margin: 0;
			flex-direction: column;

			.header
			{
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 2rem;

				font-family: Ubuntu;
				font-size: 2.5rem;

				width: 100%;

				svg
				{
					transition: 0.5s;

					${p => p.showBurgerDropdown && 'transform: rotate(90deg);'}
				}
			}

			ul
			{
				position: initial;
				background: none;

				transition: 0.5s;
				height: ${p => p.showBurgerDropdown ? 'fit-content' : '0'};
				opacity: ${p => p.showBurgerDropdown ? '1' : '0'};

				width: 80%;
				padding: 0;

				.link
				{
					width: 100%;
					
					padding: 0;
					padding-top: 2rem;
					padding-bottom: 2rem;
					font-size: 2rem;
					
					:first-of-type
					{
						border: none;
					}
				}
			}
		}
	}
`

export default Container