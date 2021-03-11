import styled from 'styled-components'

const Container = styled.div`
	.request
	{
		width: 300px;
		height: 300px;

		background: #fff;
		border-radius: 1rem;

		.header
		{
			width: 100%;
			height: 6rem;

			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			padding: 1rem 2rem;

			.typeDate
			{
				display: flex;
				align-items: center;
				gap: 1rem;

				span
				{
					display: flex;
					align-items: center;
					justify-content: center;
					
					padding: 0.5rem;
					padding-left: 1rem;
					padding-right: 1rem;
					border-radius: 1rem;
					font-family: Ubuntu;
					color: #fff;
					font-size: 1.5rem;
				}
				
				h2
				{
					font-family: Roboto;
					
				}
			}

			a
			{
				width: 4rem;
				height: 4rem;
				border-radius: 10rem;
	
				border: none;
				background: none;
				display: flex;
				align-items: center;
				justify-content: center;

				cursor: pointer;
				transition: 0.25s;
	
				:hover
				{
					background-color: ${p => p.theme.colors.background};
				}
			}
		}

		ul.info
		{
			background-color: ${p => `${p.theme.colors.background}80`};
			height: calc(100% - 6rem);

			display: flex;
			flex-direction: column;
			justify-content: center;

			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
			padding: 2rem;

			li
			{
				list-style: none;

				display: flex;
				flex-direction: column;
				gap: 1rem;

				padding: 2rem 0.5rem;

				:first-of-type
				{
					border-bottom: ${p => `${p.theme.colors.text}40`} 1px solid;
				}

				.imgName
				{
					display: flex;
					align-items: center;
					gap: 1rem;

					img
					{
						max-width: 5rem;
						max-height: 5rem;
						border-radius: 100rem;
					}

					h1
					{
						font-family: Roboto;
						font-size: 2rem;
					}
				}

				.description
				{
					h2
					{
						font-family: Roboto;
						font-size: 1.5rem;
					}
				}
			}
		}
	}
`

export default Container