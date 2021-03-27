import styled from 'styled-components'

const Container = styled.div`
	background-color: ${p => p.theme.colors.primary};

	min-height: calc(100vh - 7.5rem);
	overflow: hidden;

	.carousel
	{
		z-index: 1;

		width: 100%;
	}

	main
	{
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding-left: 5rem;
		
		img
		{
			margin-top: -7.5rem;
			z-index: 2;
		}

		.info
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
	
			width: 100%;
			gap: 2rem;
			
			h1
			{
				font-family: Ubuntu;
				font-size: 4rem;
		
				color: ${p => p.theme.colors.secondary};
			}
		
			h2
			{
				font-family: Roboto;
				font-size: 2rem;
		
				color: ${p => p.theme.colors.secondary};
			}
		}
	}

	@media (max-width: 850px)
	{
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		main
		{
			flex-direction: column;
			justify-content: space-around;

			padding: 2rem;
			height: 80%;
			
			img
			{
				margin: 0;
				width: 50vw;
			}
		}
	}
`

export default Container