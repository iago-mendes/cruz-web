import styled from 'styled-components'

const Container = styled.div`
	width: 75vw;
	height: 65vh;

	background-color: ${p => p.theme.colors.background};
	border: ${p => p.theme.colors.primary} solid 5px;
	border-radius: 2rem;

	position: relative;

	.scrollable
	{
		width: 100%;
		height: 100%;
		overflow-y: auto;

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
	}

	@media(max-width: 850px)
	{
		height: 75%;
		width: 85%;
		border-width: 3px;

		.scrollable
		{
			.close
			{
				right: 0;
				top: -6rem;
			}

			header
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

			footer
			{
				flex-direction: column-reverse;
			}
		}
	}
`

export default Container