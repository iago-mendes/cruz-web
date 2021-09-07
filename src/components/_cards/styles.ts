import styled from 'styled-components'

type Props = {
	isSelected: boolean
	type: string
}

export const Card = styled.div<Props>`
	background-color: #fff;
	width: 25rem;
	height: 25rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding: 1rem;
	padding-bottom: 2rem;

	border: ${p =>
			p.isSelected ? p.theme.colors.primary : p.theme.colors.secondary + 80}
		5px solid;
	border-radius: 2rem;

	font-family: Roboto;
	color: ${p => p.theme.colors.primaryDark};

	position: relative;

	${p => p.type === 'company' && 'cursor: pointer;'}
	transition: 0.25s;

	:hover {
		${p => p.type === 'company' && 'border-radius: 0;'}
		${p => p.type === 'company' && 'transform: scale(1.05);'}
	}

	.img {
		width: 75%;
		height: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-width: 100%;
			max-height: 100%;
		}
	}

	> figure {
		width: 75%;
		height: 50%;

		overflow: hidden;
		position: relative;

		img {
			object-fit: contain;
		}
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	span {
		font-family: Roboto;
		font-weight: 700;
		font-size: 1.25rem;
		color: ${p => p.theme.colors.primaryDark};
	}

	.field {
		display: flex;
		align-items: center;
		gap: 1rem;

		input {
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

			:focus,
			:hover {
				border-bottom-color: ${p => p.theme.colors.primaryDark};
			}

			-moz-appearance: textfield;

			::-webkit-outer-spin-button,
			::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}

		button {
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

			:hover {
				color: #fff;
				background-color: ${p => p.theme.colors.primaryDark};
			}
		}
	}

	.info {
		position: absolute;
		top: 1rem;
		right: 1rem;

		border: none;
		background: none;
		border-radius: 100rem;

		color: ${p => p.theme.colors.secondary};
		cursor: pointer;
		transition: 0.25s;

		:hover {
			color: ${p => p.theme.colors.primary};
			transform: scale(1.25);
		}
	}
`
