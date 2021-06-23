import {createGlobalStyle} from 'styled-components'
import {StylesConfig} from 'react-select'
import Modal from 'react-modal'

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
		-webkit-tap-highlight-color: transparent;
	}

	body
	{
		background-color: ${p => p.theme.colors.background};
		color: ${p => p.theme.colors.text};

		overscroll-behavior: contain;
	}

	body, input, textarea, button
	{
		font-family: Roboto;
	}

	button
	{
		cursor: pointer;
	}
	
	a
	{
		color: inherit;
		text-decoration: none;
	}

	.page
	{
		min-height: calc(100vh - 7.5rem);
	}

	.swal2-popup
	{
		#swal2-title
		{
			font-family: Ubuntu;
			font-size: 25px;
		}
		#swal2-content
		{
			font-family: Roboto;
			font-size: 20px !important;
		}
		.swal2-actions
		{
			font-size: 15px !important;
			font-family: Ubuntu !important;
		}
	}

	@media (max-width: 850px)
	{
		body
		{
			-webkit-user-select: none;
			-moz-user-select: -moz-none;
			-ms-user-select: none;
			user-select: none;
		}
	}
`

export const selectStyles: StylesConfig<{label: string, value: string}, false> =
{
	option: (provided, state) => (
		{
			cursor: 'pointer',

			fontFamily: 'Roboto',
			fontSize: '2rem',
			padding: '1rem',

			transition: '0.1s',
			color: state.isSelected ? '#fff' : state.isFocused ? '#84130B' : '#7B7B7B',
			backgroundColor: state.isSelected ? '#84130B' : '#fff'
		}),

	menu: (provided) => (
		{
			...provided,
			fontFamily: 'Roboto',
		}),

	control: (provided, state) => (
		{
			cursor: 'pointer',
		
			transition: '0.25s',

			fontFamily: 'Roboto',
			fontSize: '2rem',

			width: '100%',
			backgroundColor: '#fff',

			borderColor: state.menuIsOpen ? '#84130B' : state.isFocused ? '#84130B80' : '#7B7B7B',
			borderWidth: 2,
			borderStyle: 'solid',
			borderRadius: 5,

			display: 'flex',
			alignItems: 'center',
		}),

	singleValue: (provided) => (
		{
			...provided,

			color: '#84130B'
		}),

	indicatorSeparator: (provided, state) => (
		{
			...provided,

			backgroundColor: state.isFocused ? '#84130B' : '#7B7B7B'
		}),

	dropdownIndicator: (provided, state) => (
		{
			...provided,

			color: state.isFocused ? '#84130B' : '#7B7B7B'
		})
}

export const modalStyle: Modal.Styles =
{
	overlay:
	{
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: 2
	},

	content:
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'none',
		border: 'none',
		padding: 0,
		width: '100%',
		height: '100%',
		left: 0,
		top: 0
	}
}