import React, { useState, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group';
import 'normalize.css';
import Head from './components/Head'
import Navigation from './components/Navigation'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  const pagina = {
    inicio: 'Inicio',
    habilidades: 'Habilidades',
    proyectos: 'Proyectos',
    sobreMi: 'Sobre mi',
    contacto: 'Contacto',
  };

  const [paginaActual, setPaginaActual] = useState(pagina.inicio);
  const [paginaSiguiente, setPaginaSiguiente] = useState(pagina.inicio);
  const nodeRef = useRef(null);

  const handlePaginaClick = (nombrePagina) => {
    setPaginaSiguiente(nombrePagina);
    setPaginaActual(nombrePagina);
  };

  const getTransitionDirection = (paginaActual, paginaSiguiente) => {
    const paginas = ['inicio', 'habilidades', 'proyectos', 'sobreMi', 'contacto'];
    const posicionActual = paginas.indexOf(paginaActual);
    const posicionSiguiente = paginas.indexOf(paginaSiguiente);

    if (posicionSiguiente > posicionActual) {
      return 'right';
    } else {
      return 'left';
    }
  };

  const handlePaginaTransitionEnd = () => {
    if (paginaSiguiente !== null) {
      setPaginaActual(paginaSiguiente);
      setPaginaSiguiente(null);
    }
  };

  return (
    <>
      <Navigation
        pagina={pagina}
        paginaActual={paginaActual}
        handlePaginaClick={handlePaginaClick}
      />
      <Head />

      <div className='container-box'>
        <Transition
          in={paginaSiguiente !== null}
          timeout={3000}
          nodeRef={nodeRef}
          unmountOnExit
          onTransitionEnd={handlePaginaTransitionEnd}
        >
          {(state) => (

            <div
              ref={nodeRef}
              style={{
                transition: 'transform 3000ms ease',
                transform: state === 'exited' ?
                  `translateX(${getTransitionDirection(paginaActual, paginaSiguiente) === 'right'
                    ? '-' : ''}100%)` : 'translateX(0)',
              }}
            >
              {paginaActual === pagina.inicio && <Inicio />}
              {paginaActual === pagina.habilidades && <Habilidades />}
              {paginaActual === pagina.proyectos && <Proyectos />}
              {paginaActual === pagina.sobreMi && <SobreMi />}
              {paginaActual === pagina.contacto && <Contacto />}
            </div>
          )
          }
        </Transition>
      </div>

      <Footer />
    </>
  )
}

export default App
