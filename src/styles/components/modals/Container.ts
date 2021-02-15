import styled from 'styled-components'

const Container = styled.div`
	width: 75vw;
	height: 85vh;

	display: flex;
	flex-direction: column;

	header
	{
		display: flex;
		align-items: center;
		justify-content: flex-end;

		width: 100%;
		padding: 0.5rem;
		padding-left: 2rem;
		padding-right: 2rem;

		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		background-color: ${p => p.theme.colors.primary};

		.close
		{
			width: 3.5rem;
			height: 3.5rem;

			border-radius: 100rem;
			background: none;
			border: none;

			color: ${p => p.theme.colors.secondary};

			display: flex;
			align-items: center;
			justify-content: center;

			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				background-color: ${p => p.theme.colors.secondary};
				color: ${p => p.theme.colors.primary};

				transform: scale(1.1);
			}
		}
	}

	@media(max-width: 600px)
	{
		width: 95vw;
	}
`

export default Container