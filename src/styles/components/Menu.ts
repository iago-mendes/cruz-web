import styled from 'styled-components'

interface ContainerProps
{
	showDropdown: boolean
}

const Container = styled.nav<ContainerProps>`
	height: 7.5rem;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${p => p.theme.colors.primary};

	img
	{
		width: 10rem;

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
				z-index: 3;

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
	}
`

export default Container