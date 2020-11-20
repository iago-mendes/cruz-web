import styled from 'styled-components'

const Container = styled.div`
	width: 75vw;
	height: 65vh;

	background-color: ${p => p.theme.colors.background};
	border: ${p => p.theme.colors.primary} solid 5px;
	border-radius: 2rem;

	position: relative;

	.close
	{
		position: absolute;
		right: -5rem;
		top: -5rem;

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

	header
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

	footer
	{
		width: 100%;
		height: 30%;

		display: flex;
		align-items: center;
		justify-content: space-around;

		a, button
		{
			text-decoration: none;
			border: none;

			font-family: Ubuntu;
			font-size: 2rem;
			color: ${p => p.theme.colors.secondary};

			background-color: ${p => p.theme.colors.primary};
			width: 20rem;
			height: 6rem;
			border-radius: 2rem;

			display: flex;
			align-items: center;
			justify-content: center;

			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				transform: scale(1.05);
			}
		}
	}
`

export default Container