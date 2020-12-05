import {AppProps} from 'next/app'
import {Provider} from 'next-auth/client'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'

import '../styles/global.css'
import '../styles/pages/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import LoginHandler from '../components/LoginHandler'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <Provider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<LoginHandler>
					<Menu />
					<Component {...pageProps} />
				</LoginHandler>
			</ThemeProvider>
    </Provider>
  )
}

export default MyApp
