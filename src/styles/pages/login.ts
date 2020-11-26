import styled from 'styled-components'

import bg from '../assets/loginBackground.svg'

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--primary);

	background-image: url(${bg});
	background-position: right;
	background-repeat: no-repeat;
	background-attachment: fixed;

	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: space-between;

	.left
	{
		height: 100%;
		width: 35%;

		form
		{
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 1rem;

			padding: 5rem;
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
					color: var(--secondary);
					font-size: 1.5rem;
				}
				
				input
				{
					width: 100%;
					background-color: var(--primary-dark);
					border: none;

					height: 5rem;
					border-radius: 1rem;

					padding: 1rem;
					color: var(--primary);

					transition: 0.5s;
					
					:hover, :focus
					{
						border-radius: 0;
						box-shadow: 5px 5px 5px black;
					}
				}
			}

			button
			{
				width: 10rem;
				height: 4rem;
				border-radius: 1.5rem;

				border: none;
				background-color: var(--primary-light);
				
				color: var(--primary-dark);
				font-family: Ubuntu;
				font-size: 2rem;

				display: flex;
				align-items: center;
				justify-content: center;

				cursor: pointer;
				transition: 0.5s;
				
				:hover
				{
					transform: scale(1.05);
					box-shadow: 5px 5px 5px black;
				}
			}
		}

		.illustration
		{
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
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
				color: var(--secondary);
				font-size: 3rem;

				width: 40rem;
			}

			button
			{
				background-color: var(--primary-light);
				height: 5rem;
				width: 5rem;

				border: none;
				border-radius: 2.5rem;
				color: var(--primary-dark);
				font-size: 2.5rem;

				display: flex;
				align-items: center;
				justify-content: center;

				cursor: pointer;
				transition: 0.5s;
				
				:hover
				{
					transform: scale(1.05);
					box-shadow: 5px 5px 5px black;
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

			grid-area: 3row;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 5rem;
			padding-top: 5rem;
			
			h2
			{
				color: var(--primary-dark);
				font-family: Roboto;
				font-size: 3rem;
				width: 50rem;
				
				a
				{
					color: var(--primary);
					text-decoration: none;
					transition: 0.5s;
					
					:hover
					{
						text-shadow: 2px 2px 2px black;
						font-size: 3.1rem;
					}
				}
		
			}
	
		}
	}
`

export default Container