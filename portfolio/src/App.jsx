import { useState } from 'react'
import Head from './components/Head'
import Navigation from './components/Navigation'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import 'normalize.css';

function App() {
  const [pagina, setPagina] = useState({
    inicio: "inicio",
    habilidades: "habilidades",
    proyectos: "proyectos",
    sobreMi: "sobreMi",
    contacto: "contacto",
  })

  return (
    <>
      <Navigation
        pagina={pagina}>
      </Navigation>
      <Head></Head>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  )
}

export default App
