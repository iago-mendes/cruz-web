import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;

	padding: 5rem;
	overflow-y: auto;

	.cardGroup
	{
		width: 75%;
		height: fit-content;

		border: ${p => p.theme.colors.primary} solid 2px;
		border-radius: 2rem;
		padding: 3rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: relative;

		span
		{
			position: absolute;

			color: ${p => p.theme.colors.primary};
			font-family: Ubuntu;
			font-size: 2.5rem;

			top: -15px;
			background-color: ${p => p.theme.colors.background};

			padding-left: 1rem;
			padding-right: 1rem;
		}

		img
		{
			width: 20rem;
			height: 20rem;
		}

		.seller
		{
			background-color: #fff;
			padding: 2rem;
			border-radius: 1rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			img
			{
				border-radius: 50rem;
			}

			.text
			{
				color: ${p => p.theme.colors.primaryDark};
				text-align: center;

				h1
				{
					font-family: Ubuntu;
					font-size: 2rem;
				}

				h2
				{
					font-family: Roboto;
					font-size: 1.5rem;
				}
			}
		}
	}

	.history
	{
		flex-direction: row;
		gap: 2rem;

		p
		{
			font-family: Roboto;
			color: ${p => p.theme.colors.primaryDark};
			font-size: 1.5rem;
		}
	}
	
	.team
	{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-auto-rows: 25rem;
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;
	}

	.site
	{
		width: fit-content;

		.links
		{
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: space-around;

			a
			{
				text-decoration: none;
				transition: 0.5s;

				display: flex;
				align-items: center;
				justify-content: center;

				padding: 1rem;
				border-radius: 20rem;

				:hover
				{
					color: #fff;
				}
			}

			.github
			{
				color: #000;

				:hover
				{
					background-color: #000;
				}
			}

			.linkedin
			{
				color: #00f;

				:hover
				{
					background-color: #00f;
				}
			}
		}
	}
`

export default Container