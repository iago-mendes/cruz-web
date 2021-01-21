import {AppProps} from 'next/app'
import {Provider as SessionProvider} from 'next-auth/client'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'

import '../styles/global.css'
import '../styles/pages/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import SessionHandler from '../components/SessionHandler'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<SessionHandler>
					<Menu />
					<Component {...pageProps} />
				</SessionHandler>
			</ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
