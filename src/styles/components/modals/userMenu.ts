import styled from 'styled-components'
import Modal from 'react-modal'

const Container = styled.div`
	width: 20rem;

	.detail
	{
		display: flex;
		justify-content: flex-end;
		padding-right: 2rem;
		color: ${p => p.theme.colors.primary};
	}

	main
	{
		margin-top: -3px;
		background-color: ${p => p.theme.colors.primary};
		border-radius: 1rem;

		box-shadow: 0px 0px 10px rgba(0,0,0,1);

		.session
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			padding: 1rem;
			border-bottom: ${p => p.theme.colors.background} 1px solid;

			p
			{
				font-family: Roboto;
				font-size: 1.5rem;
				color: ${p => p.theme.colors.background};
				word-break: break-all;
			}

			button
			{
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;
				background: none;
				border: ${p => p.theme.colors.background} 1px solid;
				padding: 0.5rem;
				border-radius: 0.5rem;
				color: ${p => p.theme.colors.background};
				cursor: pointer;
				transition: 0.25s;
				:hover
				{
					color: ${p => p.theme.colors.primary};
					background-color: ${p => p.theme.colors.background};
				}
				span
				{
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 1.5rem;
				}
			}
		}

		.links
		{
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			padding: 1.5rem;
			padding-left: 2.5rem;

			a
			{
				font-family: Ubuntu;
				font-size: 1.75rem;
				font-weight: 700;
				text-decoration: none;
				color: ${p => p.theme.colors.background};
				width: fit-content;
				display: inline-block;

				::after
				{
					content: '';
					width: 0px;
					height: 2px;
					display: block;
					background: ${p => p.theme.colors.background};
					transition: 0.25s;
				}

				:hover::after
				{
					width: 100%;
				}
			}
		}
	}
`

export default Container