import {AppProps} from 'next/app'

import Menu from '../components/Menu'

import '../styles/global.css'
import '../styles/pages/index.css'
import '../styles/pages/contato.css'
import '../styles/pages/login.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
