import styled from 'styled-components'

const Container = styled.div`
	display: grid;
	grid-auto-rows: 25rem;
	grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
	grid-gap: 2rem;
	align-items: center;
	justify-items: center;

	padding: 5rem;
	padding-left: 10rem;
	padding-right: 10rem;

	.flipCard
	{
		width: 25rem;
		height: 25rem;
		perspective: 500px;
		
		.companyCard
		{
			position: relative;
			transform-style: preserve-3d;
			transition: 0.5s;
			cursor: pointer;

			width: 100%;
			height: 100%;

			.front, .back
			{
				backface-visibility: hidden;
				position: absolute;

				width: 100%;
				height: 100%;

				display: flex;
				align-items: center;
				justify-content: center;
			}

			.front
			{
				border: ${p => p.theme.colors.primary} solid 1px;
				border-radius: 1rem;
				background-color: #fff;
				padding: 1rem;

				img
				{
					width: 100%;
					height: auto;
				}
			}

			.back
			{
				transform: rotateY(180deg);
				transition: 0.5s;

				flex-direction: column;
				justify-content: space-around;
				padding-top: 5rem;
				border-radius: 1rem;

				color: ${p => p.theme.colors.secondary};

				h1
				{
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 3.5rem;

					text-align: center;
				}

				h2
				{
					font-family: Roboto;
					font-weight: 400;
					font-size: 2rem;
				}
			}
		}

		:hover .companyCard
		{
			transform: rotateY(180deg);

			.back
			{
				background-color: ${p => p.theme.colors.primary};
			}
		}
	}
`

export default Container