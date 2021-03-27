import styled from 'styled-components'

const Container = styled.div`
	.scrollable
	{
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 5rem;

		form
		{
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
			gap: 1rem;

			width: 40%;

			input, textarea
			{
				width: 100%;
				padding: 1rem;
				border-radius: 1rem;

				border-color: var(--primary);
				border-style: solid;
				border-width: 1px;

				color: var(--primary-dark);
				font-family: Ubuntu;
			}

			textarea
			{
				font-family: Roboto;
				resize: vertical;
			}

			button
			{
				background-color: var(--primary);
				color: var(--secondary);
				font-family: Ubuntu;
				font-size: 2rem;

				border: none;
				border-radius: 2rem;

				padding: 0.5rem;
				padding-left: 1.5rem;
				padding-right: 1.5rem;

				cursor: pointer;
				transition: 0.25s;
				
				:hover
				{
					transform: scale(1.1);
					border-radius: 0;
				}
			}

		}

		h1
		{
			width: 100%;
			text-align: left;

			font-family: Ubuntu;
			font-size: 3rem;
			color: var(--primary);
		}

		p
		{
			width: 100%;
			text-align: left;

			font-family: Roboto;
			font-size: 2rem;
			color: var(--primary);
			
			a
			{
				text-decoration-color: var(--background);
				font-family: Ubuntu;
				color: var(--primary);
				transition: 0.25s;

				:hover
				{
					text-decoration-color: var(--primary);
				}
			}
		}

		.phones
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			width: 40%;

			h2
			{
				font-size: 2.5rem;
				color: var(--primary);
				font-family: Ubuntu;

				width: 100%;
				text-align: right;
			}
		}
	}

	@media(max-width: 850px)
	{
		.scrollable
		{
			flex-direction: column-reverse;
			gap: 2rem;

			form
			{
				width: 100%;
				align-items: center;
			}

			.phones
			{
				width: 100%;
			}
		}
	}
`

export default Container