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
import { useTranslation, Trans } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t, i18n } = useTranslation();

  const display = {
    navigation: {
      inicio: t('navigation.home'),
      habilidades: t('navigation.skills'),
      proyectos: t('navigation.projects')
    },
    header: {
      name: t('header.name')
    },
    pages: {
      home: {
        frontendText: t('pages.home.frontendText'),
        backendText: t('pages.home.backendText')
      },
      skills: {
        downloadCVText: t('pages.skills.downloadCVText'),
        resumeTextname: t('pages.skills.resumeTextname'),
        summary: t('pages.skills.summary'),
        databasestitle: t('pages.skills.databasestitle'),
        yearText: t('pages.skills.yearText'),
        certifications: {
          title: t('pages.skills.certifications.title'),
          aws: t('pages.skills.certifications.aws'),
          csharp: t('pages.skills.certifications.csharp'),
          aspnetmvc: t('pages.skills.certifications.aspnetmvc'),
          aspnetwebapi: t('pages.skills.certifications.aspnetwebapi'),
          sqlserver: t('pages.skills.certifications.sqlserver'),
          mysql: t('pages.skills.certifications.mysql'),
          scrum: t('pages.skills.certifications.scrum'),
        }
      },
      projects: {
        projectsInfo: {
          veterinario: {
            title: t('pages.projects.projectsInfo.veterinario.title'),
            description: t('pages.projects.projectsInfo.veterinario.description')
          },
          budget: {
            title: t('pages.projects.projectsInfo.budget.title'),
            description: t('pages.projects.projectsInfo.budget.description')
          },
          cripto: {
            title: t('pages.projects.projectsInfo.cripto.title'),
            description: t('pages.projects.projectsInfo.cripto.description')
          },
          calculator: {
            title: t('pages.projects.projectsInfo.calculator.title'),
            description: t('pages.projects.projectsInfo.calculator.description')
          },
          festival: {
            title: t('pages.projects.projectsInfo.festival.title'),
            description: t('pages.projects.projectsInfo.festival.description')
          },
          task: {
            title: t('pages.projects.projectsInfo.task.title'),
            description: t('pages.projects.projectsInfo.task.description')
          },
          store: {
            title: t('pages.projects.projectsInfo.store.title'),
            description: t('pages.projects.projectsInfo.store.description')
          },
          blog: {
            title: t('pages.projects.projectsInfo.blog.title'),
            description: t('pages.projects.projectsInfo.blog.description')
          }
        },
        linkText: t('pages.projects.linkText'),
        tecnologies: t('pages.projects.tecnologies')
      }
    },
    contact: {
      title: t('contact.title'),
      phone: {
        title: t('contact.phone.title'),
        value: t('contact.phone.value')
      },
      email: {
        title: t('contact.email.title'),
        value: t('contact.email.value')
      }
    },
    footer: {
      text: t('footer.text'),
      name: t('footer.name')
    }
  };

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
        <LanguageSwitcher />
        <Navigation
          pagina={pagina}
          displayPagina={display.navigation}
          paginaActual={paginaActual}
          handlePaginaClick={handlePaginaClick}
        />
        <Head name={display.header.name} display={display} />

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
                    display={display.pages.home}
                  />}
                {paginaActual === pagina.habilidades &&
                  <Habilidades
                    appearingDirection={direction}
                    display={display.pages.skills}
                  />}
                {paginaActual === pagina.proyectos &&
                  <Proyectos
                    appearingDirection={direction}
                    display={display.pages.projects}
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
          display={display.contact}
        />
        <Footer display={display.footer} />
      </div>
    </>
  )
}

export default App
