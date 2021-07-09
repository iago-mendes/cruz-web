import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import Head from 'next/head'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Menu from '../components/Menu'
import theme from '../styles/theme'
import SessionHandler from '../components/SessionHandler'
import GlobalStyle from '../styles/global'
import Footer from '../components/Footer'
import {AuthProvider} from '../contexts/auth'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <AuthProvider>
			<Head>
				<meta name='viewport' content= 'width=device-width, user-scalable=no' />
			</Head>

			<ThemeProvider theme={theme}>
				<SessionHandler>
					<Menu />
					<Component {...pageProps} />
					<Footer />
				</SessionHandler>
				<GlobalStyle />
			</ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
