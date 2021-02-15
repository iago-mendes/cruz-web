import {AppProps} from 'next/app'
import {Provider as SessionProvider} from 'next-auth/client'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'
import SessionHandler from '../components/SessionHandler'
import GlobalStyle from '../styles/global'
import Footer from '../components/Footer'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<SessionHandler>
					<Menu />
					<Component {...pageProps} />
					<Footer />
				</SessionHandler>
				<GlobalStyle />
			</ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
