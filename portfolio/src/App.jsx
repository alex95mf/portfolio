import React, { useState, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group';
// import 'react-transition-group/dist/react-transition-group.css';
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
import MensajeNotificacion from './components/MensajeNotificacion';

function App() {
  const pagina = {
    inicio: 'Inicio',
    habilidades: 'Habilidades',
    proyectos: 'Proyectos'
  };

  const [paginaActual, setPaginaActual] = useState(pagina.inicio);
  const [paginaSiguiente, setPaginaSiguiente] = useState(pagina.inicio);
  const [mensajeNotificacion, setMensajeNotificacion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const nodeRef = useRef(null);
  const [temporizadorNotificacion, setTemporizadorNotificacion] = useState(null);
  const [direction, setDirection] = useState(null);

  // Abrir el modal
  const openModal = () => {
    setShowModal(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  const configurarMensajeNotificacion = (mensaje) => {
    // Limpiar temporizador existente, si hay uno
    if (temporizadorNotificacion) {
      clearTimeout(temporizadorNotificacion);
    }

    setMensajeNotificacion(mensaje)

    // Configurar un nuevo temporizador
    const nuevoTemporizador = setTimeout(() => {
      // console.log('Temporizador iniciado')
      setMensajeNotificacion('');
    }, 4000);

    // Almacenar el ID del nuevo temporizador en el estado
    setTemporizadorNotificacion(nuevoTemporizador);
  }

  const handlePaginaClick = (nombrePagina) => {
    setPaginaSiguiente(nombrePagina);
  };

  const getTransitionDirection = (paginaActual, paginaSiguiente) => {
    const paginas = ['Inicio', 'Habilidades', 'Proyectos'];
    const posicionActual = paginas.indexOf(paginaActual);
    const posicionSiguiente = paginas.indexOf(paginaSiguiente);

    if (posicionSiguiente > posicionActual) {
      return 'right';
    } else if (posicionSiguiente < posicionActual) {
      return 'left';
    } else {
      return 'base'
    }
  };

  const handlePaginaTransitionEnd = () => {
    if (paginaSiguiente !== null) {
      setPaginaActual(paginaSiguiente);
      setPaginaSiguiente(null);
    }
  };

  useEffect(() => {
    setDirection(getTransitionDirection(paginaActual, paginaSiguiente))
    setPaginaActual(paginaSiguiente)
  }, [paginaSiguiente])

  return (
    <>
      <div className='main-box'>
        <Navigation
          pagina={pagina}
          paginaActual={paginaActual}
          handlePaginaClick={handlePaginaClick}
        />
        <Head />

        <div className='container-box' ref={nodeRef}>
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
                {paginaActual === pagina.inicio &&
                  <Inicio
                    appearingDirection={direction}
                  />}
                {paginaActual === pagina.habilidades &&
                  <Habilidades
                    appearingDirection={direction}
                  />}
                {paginaActual === pagina.proyectos &&
                  <Proyectos
                    appearingDirection={direction}
                  />}
                {paginaActual === pagina.sobreMi &&
                  <SobreMi />}
                {paginaActual === pagina.contacto &&
                  <Contacto />}
              </div>
            )
            }
          </Transition>
        </div>
        {mensajeNotificacion.trim() != '' ?
          <MensajeNotificacion
            esOk={mensajeNotificacion[0] == 'F' ? true : false}
            mensaje={mensajeNotificacion}
          /> : null}
        <Contacto
          openModal={openModal}
          closeModal={closeModal}
          showModal={showModal}
          configurarMensajeNotificacion={configurarMensajeNotificacion}
          mensajeNotificacion={mensajeNotificacion}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
