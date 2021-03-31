import styled from 'styled-components'

interface ContainerProps
{
	step: number
}

const Container = styled.div<ContainerProps>`
	min-height: 100vh;

	header
	{
		background-color: ${p => p.theme.colors.primary};
		padding: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		.group
		{
			display: flex;
			align-items: center;
			justify-content: space-between;

			.cancel
			{
				background: none;
				border: ${p => p.theme.colors.secondary} 2px solid;
				border-radius: 100rem;

				padding: 0.5rem;
				padding-left: 1rem;
				padding-right: 1rem;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				color: ${p => p.theme.colors.secondary};
				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					background-color: ${p => p.theme.colors.secondary};
					color: ${p => p.theme.colors.primary};

					transform: scale(1.1);
				}

				span
				{
					font-family: Ubuntu;
					font-size: 1.75rem;
				}
			}

			h1
			{
				font-family: Roboto;
				font-weight: 700;
				font-size: 2.5rem;
				color: ${p => p.theme.colors.secondary};
			}

			.img
			{
				width: 10rem;
			}
		}

		.navigate
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			button
			{
				background: none;
				border: none;

				padding: 0.5rem;
				padding-left: 1rem;
				padding-right: 1rem;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				color: ${p => p.theme.colors.secondary};
				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					transform: scale(1.1);

					span::after
					{
						width: 100%;
					}
				}

				span
				{
					font-family: Ubuntu;
					font-size: 1.75rem;

					::after
					{
						content: '';
						width: 0px;
						height: 2px;
						display: block;
						background: ${p => p.theme.colors.secondary};
						transition: 0.25s;
					}
				}
			}

			ul
			{
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}
	}

	main
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		padding: 2rem;
		padding-bottom: 7.5rem;

		h1
		{
			font-family: Ubuntu;
			font-size: 2rem;
			color: ${p => p.theme.colors.primaryDark};
		}

		.grid
		{
			width: 100%;

			display: grid;
			grid-auto-rows: 25rem;
			grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
			grid-gap: 2rem;
			align-items: center;
			justify-items: center;
		}

		.group
		{
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 1rem;

			label
			{
				font-family: Roboto;
				font-weight: 700;
				font-size: 2.5rem;
				color: ${p => p.theme.colors.primaryDark};

				border-left: ${p => p.theme.colors.primaryDark} 5px solid;
				padding-left: 1rem;
			}

			span.condition
			{
				font-family: Roboto;
				font-size: 2rem;
				font-weight: 700;

				margin-left: 2rem;
			}

			button.newContactButton
			{
				width: fit-content;
				padding: 0.5rem 1rem;

				display: flex;
				align-items: center;
				gap: 1rem;

				border: none;
				border-radius: 1.5rem;

				background-color: ${p => p.theme.colors.primaryDark};
				color: #fff;
				font-size: 1.5rem;

				transition: 0.25s;

				:hover
				{
					border-radius: 0;
					transform: scale(1.1);
				}
			}

			.newContactFields
			{
				width: 100%;

				display: flex;
				gap: 1rem;

				input
				{
					border: none;
					width: 100%;

					font-size: 1.75rem;
					padding: 0.25rem 1rem;

					border-bottom: ${p => p.theme.colors.text}80 2px solid;
					transition: 0.25s;

					:focus, :hover
					{
						border-bottom: ${p => p.theme.colors.primaryDark} 2px solid;
					}
				}
			}

			.newContactSave
			{
				display: flex;
				align-items: center;
				gap: 1rem;

				span
				{
					font-size: 1.75rem;
				}
			}
		}
	}

	#totalPrice
	{
		position: fixed;
		right: 1rem;
		bottom: 1rem;

		height: 5rem;
		width: 20rem;

		background-color: ${p => p.theme.colors.primary};
		border-radius: 1rem;
		box-shadow: 0px 0px 10px #000;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding-left: 1rem;
		padding-right: 1rem;

		h3
		{
			font-family: Ubuntu;
			font-size: 2rem;
			color: ${p => p.theme.colors.background};
		}

		span
		{
			font-family: Roboto;
			font-size: 2rem;
			color: ${p => p.theme.colors.background};
		}
	}

	@media(max-width: 700px)
	{
		header .group
		{
			flex-direction: column;
			gap: 1rem;

			.cancel
			{
				margin-right: 50vw;
			}
		}
		
		main .group
		{
			.newContactFields
			{
				flex-direction: column;
			}
		}
	}
`

interface CardProps
{
	isSelected: boolean
	type: string
}

export const Card = styled.div<CardProps>`
	background-color: #fff;
	width: 25rem;
	height: 25rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding: 1rem;
	padding-bottom: 2rem;

	border: ${p => p.isSelected ? p.theme.colors.primary : p.theme.colors.secondary + 80} 5px solid;
	border-radius: 2rem;

	font-family: Roboto;
	color: ${p => p.theme.colors.primaryDark};

	position: relative;

	${p => p.type === 'company' && 'cursor: pointer;'}
	transition: 0.25s;

	:hover
	{
		${p => p.type === 'company' && 'border-radius: 0;'}
		${p => p.type === 'company' && 'transform: scale(1.05);'}
	}

	.img
	{
		width: 75%;
		height: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		img
		{
			max-width: 100%;
			max-height: 100%;
		}
	}

	h2
	{
		font-size: 2rem;
	}

	h3
	{
		font-size: 1.5rem;
	}

	span
	{
		font-family: Roboto;
		font-weight: 700;
		font-size: 1.25rem;
		color: ${p => p.theme.colors.primaryDark};
	}

	.field
	{
		display: flex;
		align-items: center;
		gap: 1rem;

		input
		{
			height: 2.5rem;
			width: 5rem;

			background: none;
			border: none;
			border-bottom: ${p => p.theme.colors.primaryDark}80 2px solid;

			font-family: Roboto;
			font-weight: 700;
			font-size: 1.5rem;
			color: ${p => p.theme.colors.primaryDark};

			padding-left: 0.5rem;
			padding-right: 0.5rem;

			transition: 0.25s;
		
			:focus, :hover
			{
				border-bottom-color: ${p => p.theme.colors.primaryDark};
			}

			-moz-appearance: textfield;

			::-webkit-outer-spin-button, ::-webkit-inner-spin-button
			{
				-webkit-appearance: none;
				margin: 0;
			}
		}

		button
		{
			background: none;
			border: none;

			height: 3rem;
			width: 3rem;
			border-radius: 100rem;

			display: flex;
			align-items: center;
			justify-content: center;

			color: ${p => p.theme.colors.primaryDark};
			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				color: #fff;
				background-color: ${p => p.theme.colors.primaryDark};
			}
		}
	}

	.info
	{
		position: absolute;
		top: 1rem;
		right: 1rem;

		border: none;
		background: none;
		border-radius: 100rem;

		color: ${p => p.theme.colors.secondary};
		cursor: pointer;
		transition: 0.25s;

		:hover
		{
			color: ${p => p.theme.colors.primary};
			transform: scale(1.25);
		}
	}
`

export default Container