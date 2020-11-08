import {AppProps} from 'next/app'

import Menu from '../components/Menu'
import '../styles/global.css'

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
