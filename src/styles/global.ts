import {createGlobalStyle} from 'styled-components'
import {StylesConfig} from 'react-select'

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
			color: state.isSelected ? '#23232A' : state.isFocused ? '#FF8A00' : '#7B7B7B',
			backgroundColor: state.isSelected ? '#FF8A00' : '#23232A'
		}),

	menu: (provided) => (
		{
			...provided,
			fontFamily: 'Roboto',
			backgroundColor: '#23232A'
		}),

	control: (provided, state) => (
		{
			cursor: 'pointer',
		
			transition: '0.25s',

			fontFamily: 'Roboto',
			fontSize: '2rem',

			width: '100%',
			backgroundColor: '#23232A',

			borderColor: state.menuIsOpen ? '#FF8A00' : state.isFocused ? '#FF8A0080' : '#7B7B7B',
			borderWidth: 2,
			borderStyle: 'solid',
			borderRadius: 5,

			display: 'flex',
			alignItems: 'center',
		}),

	singleValue: (provided) => (
		{
			...provided,

			color: '#FF8A00'
		}),

	indicatorSeparator: (provided, state) => (
		{
			...provided,

			backgroundColor: state.isFocused ? '#FF8A00' : '#7B7B7B'
		}),

	dropdownIndicator: (provided, state) => (
		{
			...provided,

			color: state.isFocused ? '#FF8A00' : '#7B7B7B'
		})
}