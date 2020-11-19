import {AppProps} from 'next/app'
import {Provider} from 'next-auth/client'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'

import '../styles/global.css'
import '../styles/pages/index.css'
import '../styles/pages/contato.css'
import '../styles/pages/login.css'
import '../styles/components/menu.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <Provider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Menu />
				<Component {...pageProps} />
			</ThemeProvider>
    </Provider>
  )
}

export default MyApp
