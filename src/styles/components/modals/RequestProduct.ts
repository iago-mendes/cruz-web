import styled from 'styled-components'

const Container = styled.main`
	padding-top: 1rem;
	background-color: ${p => p.theme.colors.background};

	width: 100%;
	min-height: calc(85vh - (3.5rem + 1rem + 1rem));
	overflow-y: auto;

	.group {
		display: flex;
		align-items: center;
		justify-content: space-around;

		border-bottom: ${p => p.theme.colors.primaryDark} 1px solid;
		padding-bottom: 1rem;
		margin-bottom: 1rem;

		.img {
			width: 40%;
			height: 30rem;

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				max-width: 100%;
				max-height: 100%;
			}
		}

		h1 {
			width: 50%;

			font-family: Ubuntu;
			font-size: 3rem;
			color: ${p => p.theme.colors.primaryDark};
		}
	}

	ul {
		display: grid;
		grid-auto-rows: 10rem;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;

		li {
			text-decoration: none;

			width: 100%;
			padding-left: 1rem;
			padding-right: 1rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			h2 {
				font-family: Roboto;
				font-size: 2rem;
				color: ${p => p.theme.colors.primaryDark};

				width: 100%;

				border-left: ${p => p.theme.colors.primaryDark} 5px solid;
				padding-left: 1rem;
			}

			span {
				font-family: Roboto;
				font-size: 1.75rem;

				width: 100%;
				text-align: right;
			}
		}
	}

	@media (max-width: 600px) {
		.group {
			flex-direction: column;
			gap: 1rem;

			.img {
				width: 75% !important;
				height: 25rem !important;
			}

			h1 {
				width: 90% !important;
			}
		}
	}
`

export default Container
