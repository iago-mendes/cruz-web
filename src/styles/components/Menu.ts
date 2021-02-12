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
			height: 100%;

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
				position: absolute;
				margin: 0;

				background-color: ${p => `${p.theme.colors.primary}e6`};

				width: 15rem;
				height: fit-content;
				padding: 1rem;

				transition: 0.5s;
				top: ${p => p.showDropdown ? '7.5rem' : '0'};
				z-index: 1000;

				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 2rem;
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
	}

	.user
	{
		display: flex;
		align-items: center;
		justify-content: center;

		height: 50%;

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

	.burger
	{
		background: none;
		border: none;

		margin-left: 2rem;
		color: ${p => p.theme.colors.secondary};
	}
`

export default Container