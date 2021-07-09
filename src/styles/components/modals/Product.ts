import styled from 'styled-components'

const Container = styled.main`
	padding: 2rem;

	img {
		height: auto;
		width: 100%;

		border-radius: 2rem;
	}

	.info {
		color: ${p => p.theme.colors.primaryDark};
		padding: 1rem;
		width: 100%;

		h1 {
			font-family: Ubuntu;
			font-size: 3rem;
		}

		h2 {
			font-family: Roboto;
			font-size: 1.5rem;

			margin-top: 1rem;
		}
	}

	@media (max-width: 850px) {
		.info h1 {
			font-size: 2.5rem;
		}
	}
`

export default Container
