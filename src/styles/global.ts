import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
	:root
	{
		--primary: #84130B;
		--primary-dark: #260503;
		--primary-light: #ED271D;
		--secondary: #CC9749;
		--secondary-strong: #E2AD25;
		--background: #E2DADB;

		font-size: 10px;
	}

	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body
	{
		background-color: ${p => p.theme.colors.background};
	}
`