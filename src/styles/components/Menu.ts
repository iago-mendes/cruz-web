import styled from 'styled-components'

interface ContainerProps
{
	showDropdown: boolean
	isUserMenuOpen: boolean
}

const Container = styled.div<ContainerProps>`
	height: 7.5rem;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${p => p.theme.colors.primary};

	.logo
	{
		height: 100%;

		margin-left: 2.5rem;

		cursor: pointer;
		transition: 0.25s;

		:hover
		{
			transform: scale(1.1);
		}
	}

	nav
	{
		display: flex;
		align-items: center;
		gap: 2rem;

		margin-right: 2rem;
	}

	ul
	{
		display: flex;
		align-items: center;
		gap: 3rem;

		height: 100%;

		*
		{
			font-family: Ubuntu;
		}

		.link
		{
			font-weight: 700;
			font-size: 1.75rem;
			text-decoration: none;

			color: ${p => p.theme.colors.secondary};

			::after
			{
				content: '';
				width: 0px;
				height: 2px;
				display: block;

				background: ${p => p.theme.colors.secondary};
				transition: 0.25s;
			}

			:hover::after
			{
				width: 100%;
			}
		}

		.dropdown
		{
			height: 7.5rem;

			color: ${p => p.theme.colors.secondary};
			text-decoration: none;
			font-size: 1.75rem;
			transition: 0.25s;

			display: flex;
			align-items: center;
			justify-content: center;

			padding: 0;
			margin: 0;
			cursor: pointer;

			position: relative;

			.group
			{
				display: flex;
				align-items: center;
				gap: 0.5rem;

				svg
				{
					transition: 0.25s;
					transform: ${p => p.showDropdown ? 'rotate(180deg)' : 'rotate(90deg)'};
				}
			}

			ul
			{
				background-color: ${p => p.theme.colors.primary};
				box-shadow: 0px 5px 5px black;

				width: 15rem;
				height: fit-content;
				padding: 1rem;
				padding-top: 2rem;

				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 2rem;
			}
		}
	}

	.linkBlock
	{
		font-family: Ubuntu;
		font-weight: 700;
		font-size: 1.75rem;
		text-decoration: none;

		color: ${p => p.theme.colors.secondary};
		border: ${p => p.theme.colors.secondary} 2px solid;
		border-radius: 100rem;

		padding: 0.75rem;
		padding-left: 1rem;
		padding-right: 1rem;

		cursor: pointer;
		transition: 0.25s;

		:hover
		{
			background-color: ${p => p.theme.colors.secondary};
			color: ${p => p.theme.colors.primary};
		}
	}

	.user
	{
		display: flex;
		align-items: center;
		justify-content: center;

		height: 50%;
		position: relative;

		button
		{
			display: flex;
			align-items: center;
			gap: 1rem;

			border: none;
			background: none;
			padding: 0;
			margin: 0;

			height: 5rem;
			border-radius: 100rem;
			color: ${p => p.theme.colors.secondary};
			
			cursor: pointer;
			transition: 0.25s;
			
			:hover
			{
				transform: scale(1.07);
			}

			.img
			{
				max-width: 100%;
				max-height: 100%;
				border-radius: 100rem;
			}
			.indicator
			{
				transition: 0.25s;
				transform: ${p => p.isUserMenuOpen ? 'rotate(-180deg)' : 'rotate(-90deg)'};
			}
		}
	}

	button.controller
	{
		font-size: 3rem;
		color: ${p => p.theme.colors.secondary};

		background: none;
		border: none;
		border-radius: 5rem;

		padding: 0.5rem;
		margin-left: 2rem;

		display: flex;
		align-items: center;
		justify-content: center;

		transition: background-color 0.25s;

		:hover
		{
			background-color: ${p => p.theme.colors.primaryDark}80;
		}
	}
`

interface BurgerMenuProps
{
	isOpen: boolean
}

export const BurgerMenu = styled.div<BurgerMenuProps>`
	position: fixed;
	left: ${p => p.isOpen ? 0 : '-100vw'};
	top: 0;
	z-index: 2;

	width: 75vw;
	height: 100vh;
	background-color: ${p => p.theme.colors.primary};
	box-shadow: 5px 0px 5px rgba(0,0, 0, 0.5);

	overflow-y: auto;
	padding: 1rem;

	transition: left 0.25s;

	button.controller
	{
		margin-left: auto;
		margin-bottom: 5rem;
	}

	ul
	{
		flex-direction: column;
		gap: 5rem;

		width: 100%;
		height: fit-content;

		.dropdown
		{
			height: fit-content;
		}
	}
`

export default Container