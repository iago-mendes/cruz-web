import styled from 'styled-components'

const Container = styled.footer`
	background-color: ${p => p.theme.colors.primaryDark};
	padding-top: 3rem;
	padding-bottom: 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	overflow-x: hidden;
	
	*
	{
		color: ${p => p.theme.colors.secondary};
		font-family: Ubuntu
	}
	
	.logo
	{
		gap: 1rem;
		width: 25%;
		cursor: pointer;
		transition: 0.25s;
		
		:hover
		{
			transform: scale(1.05);
		}
	}
	
	.links
	{
		width: 60%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		
		.group
		{
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			
			h3
			{
				font-weight: 700;
				font-size: 2.5rem;
				border-left: ${p => p.theme.colors.secondary} 5px solid;
				padding-left: 1rem;
			}
			
			ul
			{
				margin-left: 2rem;
				display: grid;
				grid-auto-rows: 3rem;
				grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
				grid-gap: 1rem;
				align-items: center;
			
				
				a
				{
					text-decoration: none;
				}
				
				.link
				{
					font-size: 1.75rem;
					width: fit-content;
					
					::after
					{
						content: '';
						width: 0px;
						height: 2px;
						display: block;
						background: ${p => p.theme.colors.secondary};
						transition: 0.25s;
					}
					
					:hover::after
					{
						width: 100%;
					}
				}
				
				.social
				{
					display: flex;
					align-items: center;
					gap: 0.5rem;
					transition: 0.25s;
					
					:hover
					{
						text-shadow: 0 0 5px ${p => p.theme.colors.secondary};
						transform: scale(1.05);
					}
					
					span
					{
						font-size: 1.5rem;
					}
				}
			}
		}
	}
	
	@media(max-width: 700px)
	{
		flex-direction: column;
		
		.logo
		{
			width: 75%;
		}
		
		.links
		{
			width: 90%;
		}
	}
`

export default Container