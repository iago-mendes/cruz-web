import styled from 'styled-components'

const Container = styled.div`
	width: 75vw;
	height: 80vh;

	background-color: ${p => p.theme.colors.background};
	border: ${p => p.theme.colors.primary} solid 5px;
	border-radius: 2rem;

	position: relative;
	overflow-y: auto;
	overflow-x: hidden;

	.close
	{
		position: fixed;
		right: calc(12.5vw - 5rem);
		top: calc(10vh - 5rem);

		width: 4rem;
		height: 4rem;
		border-radius: 2rem;

		border: none;
		background-color: ${p => p.theme.colors.background};

		display: flex;
		align-items: center;
		justify-content: center;
		color: ${p => p.theme.colors.primary};

		cursor: pointer;
		transition: 0.25s;

		:hover
		{
			background-color: ${p => p.theme.colors.primary};
			color: ${p => p.theme.colors.background};
		}
	}

	main
	{
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;

		img
		{
			height: auto;
			width: 100%;

			border-radius: 2rem;
		}

		div
		{
			color: ${p => p.theme.colors.primaryDark};
			padding: 1rem;
			width: 100%;

			h1
			{
				font-family: Ubuntu;
				font-size: 3rem;
			}

			h2
			{
				font-family: Roboto;
				font-size: 1.5rem;

				margin-top: 1rem;
			}
		}
	}

	@media(max-width: 850px)
	{
		width: 85%;
		height: 75%;
		border-width: 3px;
		
		.close
		{
			right: 7.5%;
			top: calc(12.5% - 5rem);
		}

		main
		{
			div
			{
				h1
				{
					font-size: 2.5rem;
				}
			}
		}
	}
`

export default Container