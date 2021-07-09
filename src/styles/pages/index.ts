import styled from 'styled-components'

const Container = styled.div`
	background-color: ${p => p.theme.colors.primary};
	min-height: calc(100vh - 7.5rem);

	display: flex;
	flex-direction: column;
	gap: 2rem;

	color: ${p => p.theme.colors.secondary};

	.carousel {
		z-index: 1;

		width: 100%;
	}

	main {
		min-height: 50vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;

		padding: 2rem;

		.info {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			h1 {
				font-size: 2.5rem;
			}

			h2 {
				font-size: 1.75rem;
			}
		}

		img {
			margin: 0;
			width: 50vw;
		}
	}

	p {
		font-size: 1.75rem;
		font-weight: 700;

		padding: 1rem 2rem;

		width: 100%;
		text-align: center;
	}

	@media (min-width: 850px) {
		gap: 0;

		main {
			min-height: 0;

			flex-direction: row;
			justify-content: space-around;

			img {
				margin-top: -7.5rem;
				z-index: 2;

				width: 35rem;
			}

			.info {
				gap: 2rem;

				h1 {
					font-family: Ubuntu;
					font-size: 4rem;

					color: ${p => p.theme.colors.secondary};
				}

				h2 {
					font-family: Roboto;
					font-size: 2rem;

					color: ${p => p.theme.colors.secondary};
				}
			}
		}

		p {
			width: 100%;
			text-align: center;
			padding: 10rem 2rem;

			font-size: 3rem;
		}
	}
`

export default Container
