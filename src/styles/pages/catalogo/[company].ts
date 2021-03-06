import styled from 'styled-components'

const Container = styled.div`
	main {
		display: grid;
		grid-auto-rows: 25rem;
		grid-template-columns: repeat(auto-fill, 25rem);
		grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;

		padding: 5rem;
		padding-left: 10rem;
		padding-right: 10rem;

		.product {
			width: 25rem;
			height: 25rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			padding: 1rem;

			background-color: #fff;
			border: ${p => p.theme.colors.primary} solid 1px;
			border-radius: 1rem;

			cursor: pointer;
			transition: 0.25s;

			:hover {
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
				transform: scale(1.05);
			}

			.img {
				height: 80%;
				width: 100%;

				display: flex;
				align-items: center;
				justify-content: center;

				img {
					max-height: 100%;
					max-width: 100%;
				}
			}

			h1 {
				font-family: Ubuntu;
				font-size: 1.5rem;

				color: ${p => p.theme.colors.primaryDark};
			}
		}
	}

	@media (max-width: 850px) {
		main {
			padding: 2rem;
		}
	}
`

export default Container
