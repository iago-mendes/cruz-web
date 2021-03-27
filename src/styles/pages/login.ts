import styled from 'styled-components'

const Container = styled.div`
	background-color: ${p => p.theme.colors.primary};

	main
	{
		width: 100%;
		min-height: 100vh;

		overflow: hidden;

		display: flex;
		align-items: center;
		justify-content: space-between;

		.left
		{
			height: 100%;
			width: 35%;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;

			form
			{
				width: 100%;

				display: flex;
				flex-direction: column;
				align-items: flex-end;
				gap: 1rem;

				padding-right: 5rem;
				padding-left: 10rem;
				height: fit-content;

				.fieldInput
				{
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 0.5rem;

					width: 100%;

					label
					{
						font-family: Ubuntu;
						color: ${p => p.theme.colors.secondary};
						font-size: 1.5rem;
					}
					
					input
					{
						width: 100%;
						background-color: ${p => p.theme.colors.primaryDark};
						border: none;

						height: 5rem;
						border-radius: 1rem;

						padding: 1rem;
						color: ${p => p.theme.colors.primaryLight};

						transition: 0.5s;
						
						:hover, :focus
						{
							border-radius: 0;
						}
					}
				}

				button
				{
					width: 10rem;
					height: 4rem;
					border-radius: 1.5rem;

					background: none;
					border: ${p => p.theme.colors.secondary} 2px solid;
					
					color: ${p => p.theme.colors.secondary};
					font-family: Ubuntu;
					font-size: 2rem;

					display: flex;
					align-items: center;
					justify-content: center;

					cursor: pointer;
					transition: 0.25s;
					
					:hover
					{
						transform: scale(1.1);
						background-color: ${p => p.theme.colors.secondary};
						color: ${p => p.theme.colors.primary};
					}
				}
			}

			.illustration
			{
				width: 100%;
				padding: 2rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

		}

		.right
		{
			height: 100%;
			width: 65%;

			.firstRow
			{
				height: 20%;

				display: flex;
				justify-content: space-between;

				padding: 2rem;
				
				h1
				{
					font-family: Ubuntu;
					color: ${p => p.theme.colors.secondary};
					font-size: 3rem;

					width: 40rem;
				}

				button
				{
					background-color: ${p => p.theme.colors.primaryLight};
					height: 5rem;
					width: 5rem;

					border: none;
					border-radius: 2.5rem;
					color: ${p => p.theme.colors.primaryDark};
					font-size: 2.5rem;

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

			.secondRow
			{
				height: 50%;

				display: flex;
				align-items: center;
				justify-content: flex-end;

				padding-right: 2rem;
			}

			.thirdRow
			{
				height: 30%;

				display: flex;
				align-items: center;
				justify-content: flex-end;
				padding: 2rem;
				
				p
				{
					color: ${p => p.theme.colors.secondary};
					font-family: Roboto;
					font-size: 3rem;
					width: 50rem;
					
					a
					{
						color: ${p => p.theme.colors.secondaryStrong};
						transition: 0.25s;
					}
				}
			}
		}
	}

	@media(max-width: 850px)
	{
		background-image: none;

		main
		{
			height: fit-content;
			flex-direction: column;

			padding-top: 2rem;

			.left, .right
			{
				width: 100%;
				height: fit-content;
			}

			.left
			{
				form
				{
					padding: 4rem;
				}
			}

			.right
			{
				.firstRow
				{
					height: fit-content;

					button
					{
						position: fixed;
						right: 1rem;
						top: 1rem;
					}
				}

				.secondRow
				{
					height: fit-content;
					padding: 0;
					justify-content: center;
				}

				.thirdRow
				{
					height: fit-content;
					justify-content: center;

					h2
					{
						color: ${p => p.theme.colors.secondary};

						a
						{
							color: ${p => p.theme.colors.secondary};
							text-decoration-color: ${p => p.theme.colors.secondary};
							transition: 0.25s;
							
							:hover
							{
								color: ${p => p.theme.colors.primaryDark};
								text-decoration-color: ${p => p.theme.colors.primaryDark};
							}
						}
					}
				}
			}
		}
	}
`

export default Container