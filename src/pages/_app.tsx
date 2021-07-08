import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'
import SessionHandler from '../components/SessionHandler'
import GlobalStyle from '../styles/global'
import Footer from '../components/Footer'
import {AuthProvider} from '../contexts/auth'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <AuthProvider>
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
