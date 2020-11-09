import Head from 'next/head'

import illustration from '../assets/illustration1.svg'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>Cruz representações</title>
      </Head>
      <Carousel />
      <main>
          <img src={illustration} alt="Homem mexendo no computador"/>
          <div className="name">
              <h1>Cruz Representações</h1>
              <h2>Excelência em representação comercial no Norte de Minas Gerais.</h2>
          </div>
      </main>
    </div>
  )
}
