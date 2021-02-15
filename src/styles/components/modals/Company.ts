import styled from 'styled-components'

const Container = styled.main`
	.logoName
	{
		width: 100%;
		height: 30%;

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 5rem;
		padding-right: 20rem;

		border-bottom: ${p => p.theme.colors.primary} solid 1px;

		img
		{
			height: 90%;
			width: auto;
		}

		h1
		{
			font-family: Ubuntu;
			font-size: 4rem;
			color: ${p => p.theme.colors.primary};
		}
	}

	p
	{
		height: 40%;
		width: 100%;

		padding: 2rem;

		font-family: Roboto;
		color: ${p => p.theme.colors.primary};
		font-size: 1.5rem;
	}

	.links
	{
		width: 100%;
		height: 30%;

		display: flex;
		align-items: center;
		justify-content: space-around;

		a
		{
			text-decoration: none;
			border: none;

			font-family: Ubuntu;
			font-size: 2rem;
			color: ${p => p.theme.colors.secondary};

			background-color: ${p => p.theme.colors.primary};
			width: 25rem;
			height: 6rem;
			border-radius: 2rem;

			display: flex;
			align-items: center;
			justify-content: center;

			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				transform: scale(1.1);
				border-radius: 0;
			}
		}
	}

	@media(max-width: 850px)
	{
		.logoName
		{
			flex-direction: column;
			padding: 1rem;

			img
			{
				height: 50%;
				width: auto;
				max-width: 100%;
			}

			h1
			{
				font-size: 3rem;
			}
		}

		p
		{
			height: fit-content;
		}

		.links
		{
			flex-direction: column-reverse;
		}
	}
`

export default Container