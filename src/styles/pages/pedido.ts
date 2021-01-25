import styled from 'styled-components'

interface ContainerProps
{
	step: number
}

const Container = styled.div<ContainerProps>`
	header
	{
		background-color: ${p => p.theme.colors.primary};
		padding: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		.group
		{
			display: flex;
			align-items: center;
			justify-content: space-between;

			.cancel
			{
				background: none;
				border: ${p => p.theme.colors.secondary} 2px solid;
				border-radius: 100rem;

				padding: 0.5rem;
				padding-left: 1rem;
				padding-right: 1rem;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				color: ${p => p.theme.colors.secondary};
				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					background-color: ${p => p.theme.colors.secondary};
					color: ${p => p.theme.colors.primary};

					transform: scale(1.1);
				}

				span
				{
					font-family: Ubuntu;
					font-size: 1.75rem;
				}
			}

			h1
			{
				font-family: Roboto;
				font-weight: 700;
				font-size: 2.5rem;
				color: ${p => p.theme.colors.secondary};
			}

			.img
			{
				width: 10rem;
			}
		}

		.navigate
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			button
			{
				background: none;
				border: none;

				padding: 0.5rem;
				padding-left: 1rem;
				padding-right: 1rem;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				color: ${p => p.theme.colors.secondary};
				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					transform: scale(1.1);

					span::after
					{
						width: 100%;
					}
				}

				span
				{
					font-family: Ubuntu;
					font-size: 1.75rem;

					::after
					{
						content: '';
						width: 0px;
						height: 2px;
						display: block;
						background: ${p => p.theme.colors.secondary};
						transition: 0.25s;
					}
				}
			}
		}
	}
`

export default Container