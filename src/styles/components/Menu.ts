import styled from 'styled-components'

interface ContainerProps
{
	showDropdown: boolean
	isUserMenuOpen: boolean
}

const Container = styled.nav<ContainerProps>`
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

	button
	{
		padding: 1rem;
		background: none;
		border: none;

		color: ${p => p.theme.colors.secondary};
		margin-right: 2.5rem;
	}

	ul
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 50%;
		height: 100%;

		margin-right: 2rem;

		font-family: Ubuntu;

		.link
		{
			color: ${p => p.theme.colors.secondary};
			text-decoration: none;
			font-size: 1.75rem;
			transition: 0.25s;

			width: 10rem;
			display: flex;
			align-items: center;
			justify-content: center;

			:hover
			{
				text-shadow: 0px 0px 10px ${p => p.theme.colors.secondary};
			}
		}

		.linkBlock
		{
			color: ${p => p.theme.colors.secondary};
			text-decoration: none;
			font-size: 1.75rem;
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

		.linkUser
		{
			background-color: #C4C4C4;
			border-radius: 100px;
			padding: 1rem;
			transition: 0.25s;

			:hover
			{
				transform: scale(1.1);
			}
		}

		.dropdown
		{
			height: 100%;

			color: ${p => p.theme.colors.secondary};
			text-decoration: none;
			font-size: 1.75rem;
			transition: 0.25s;

			width: 10rem;
			display: flex;
			align-items: center;
			justify-content: center;

			font-family: Ubuntu;
			padding: 0;
			margin: 0;
			cursor: pointer;

			position: relative;

			:hover
			{
				text-shadow: 0px 0px 10px ${p => p.theme.colors.secondary};

				ul
				{
					text-shadow: none;
				}
			}

			ul
			{
				position: absolute;
				margin: 0;

				background-color: ${p => `${p.theme.colors.primary}e6`};

				width: 15rem;
				height: fit-content;

				transition: 0.5s;
				top: ${p => p.showDropdown ? '7.5rem' : '0'};
				z-index: 1000;

				display: flex;
				flex-direction: column;
				align-items: flex-start;

				padding: 1rem;

				a
				{
					justify-content: flex-start;

					padding-top: 1rem;
					padding-bottom: 1rem;

					border-top: ${p => p.theme.colors.secondary} solid 1px;
					width: 100%;

					text-align: left;

					:first-of-type
					{
						border-top: none;
					}
				}
			}
		}

		.user
		{
			display: flex;
			align-items: center;
			justify-content: center;

			height: 50%;

			::before
			{
				content: '';
				width: 2px;
				height: 100%;
				margin-left: 1rem;
				margin-right: 1rem;

				display: block;
				background: ${p => p.theme.colors.secondary};
				border-radius: 100rem;

				transition: 0.25s;
			}

			span
			{
				font-family: Ubuntu;
				font-weight: 700;
				font-size: 1.75rem;
				color: ${p => p.theme.colors.secondary};
				border: ${p => p.theme.colors.secondary} 2px solid;
				border-radius: 100rem;
				padding: 0.5rem;
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
	}
`

export default Container