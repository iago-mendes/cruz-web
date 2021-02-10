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

	main
	{
		padding-top: 1rem;
		background-color: ${p => p.theme.colors.background};

		width: 100%;
		min-height: calc(85vh - (3.5rem + 1rem + 1rem));
		overflow-y: auto;

		.group
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			border-bottom: ${p => p.theme.colors.primaryDark} 1px solid;
			padding-bottom: 1rem;
			margin-bottom: 1rem;

			.img
			{
				width: 40%;
				height: 30rem;

				display: flex;
				align-items: center;
				justify-content: center;

				img
				{
					max-width: 100%;
					max-height: 100%;
				}
			}

			h1
			{
				width: 50%;

				font-family: Ubuntu;
				font-size: 3rem;
				color: ${p => p.theme.colors.primaryDark};
			}
		}

		ul
		{
			display: grid;
			grid-auto-rows: 10rem;
			grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
			grid-gap: 2rem;
			align-items: center;
			justify-items: center;

			li
			{
				text-decoration: none;

				width: 100%;
				padding-left: 1rem;
				padding-right: 1rem;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				h2
				{
					font-family: Roboto;
					font-size: 2rem;
					color: ${p => p.theme.colors.primaryDark};

					width: 100%;

					border-left: ${p => p.theme.colors.primaryDark} 5px solid;
					padding-left: 1rem;
				}

				span
				{
					font-family: Roboto;
					font-size: 1.75rem;

					width: 100%;
					text-align: right;
				}
			}
		}
	}

	@media(max-width: 600px)
	{
		width: 95vw;

		.group
		{
			flex-direction: column;
			gap: 1rem;

			.img
			{
				width: 75% !important;
				height: 25rem !important;
			}

			h1
			{
				width: 90% !important;
			}
		}
	}
`

export default Container