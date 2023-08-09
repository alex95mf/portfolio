import React, { useState } from 'react'
import '../styles/proyectos.css'
import CuadroProyecto from './CuadroProyecto'
import proyectoVeterinaria from '../assets/images/seguimientoVeterinaria.webp'
import proyectobudgetMG from '../assets/images/budgetmg.webp'
import proyectoCriptoSearch from '../assets/images/criptosearch.webp'
import proyectoMethodicCalculator from '../assets/images/methodiccalculator.webp'
import proyectoRockedMusicFestival from '../assets/images/rockedmusicfestival.webp'
import proyectoTaskApp from '../assets/images/taskapp.webp'
import proyectoCoolStore from '../assets/images/coolstore.webp'
import proyectoBlogEnCafe from '../assets/images/blogencafe.webp'

function Proyectos() {
    const react = 'React';
    const tailwindCss = 'TailwindCSS'
    const html = 'Html'
    const css = 'CSS'
    const vite = 'Vite'
    const js = 'Javascript'
    const ts = 'Typescript'
    const cryptowatchApi = 'Cryptowatch API'
    const styledComponents = 'Styled Components'
    const sass = 'SASS'
    const scss = 'SCSS'

    const proyectos = [
        {
            nombre: 'seguimientoVeterinaria',
            nombreCompleto: 'Veterinario Online',
            descripcion: `Aplicación web para el seguimiento online de pacientes. Contempla la 
            visualización, creación, modificación y eliminación de registros con información de cada 
            paciente. Toda la información se almacena en el almacenamiento local del navegador para 
            preservar datos.`,
            link: 'https://veterinario-online.netlify.app/',
            imagen: proyectoVeterinaria,
            tecnologias: [react, js, tailwindCss, vite]
        },
        {
            nombre: 'budgetMg',
            nombreCompleto: 'Budget MG',
            descripcion: `Aplicación web para manejar un presupuesto establecido inicialmente. Permite
            crear gastos que se visualizarán en un gráfico en relación con el presupuesto. Contempla
            opción de filtro para la visualización de gastos.`,
            link: 'https://presupuesto-management.netlify.app/',
            imagen: proyectobudgetMG,
            tecnologias: [react, js, css, vite, styledComponents]
        },
        {
            nombre: 'criptoSearch',
            nombreCompleto: 'Cripto Search',
            descripcion: `Aplicación web para la cotización de información en tiempo real de monedas 
            y criptomonedas más populares, con su respectiva equivalencia.`,
            link: 'https://cripto-search.netlify.app/',
            imagen: proyectoCriptoSearch,
            tecnologias: [react, js, css, vite, cryptowatchApi]
        },
        {
            nombre: 'methodicCalculator',
            nombreCompleto: 'Methodic Calculator',
            descripcion: `Calculadora online que permite realizar todas las operaciones matemáticas
            básicas. Consta de pantalla responsiva y dinámica.`,
            link: 'https://methodic-calculator.netlify.app/',
            imagen: proyectoMethodicCalculator,
            tecnologias: [react, ts, html, css]
        },
        {
            nombre: 'rockedMusicFestival',
            nombreCompleto: 'Rocked Music Festival',
            descripcion: `Plataforma web de evento: Festival de Música de Rock. Contempla información 
            de Line Up, galería y sección de tickets.`,
            link: 'https://rockedmusicfestival.netlify.app/',
            imagen: proyectoRockedMusicFestival,
            tecnologias: [js, html, sass, scss]
        },
        {
            nombre: 'taskApp',
            nombreCompleto: 'Task App',
            descripcion: `Aplicación web para la gestión de tareas. Permite visualizar, agregar, 
            modificar y eliminar tareas. Además de marcar tareas como completadas o no completadas.`,
            link: 'https://ramftaskapp.netlify.app/',
            imagen: proyectoTaskApp,
            tecnologias: [react, js, html, css]
        },
        {
            nombre: 'coolStore',
            nombreCompleto: 'Cool Store',
            descripcion: `Plataforma E-Commerce para tienda de ropa. Permite visualización y compra 
            de productos.`,
            link: 'https://coolstore.netlify.app/',
            imagen: proyectoCoolStore,
            tecnologias: [html, css]
        },
        {
            nombre: 'blogEnCafe',
            nombreCompleto: 'Blog enCafe',
            descripcion: `Sitio web para consulta de información sobre café. El blog posee diferentes 
            entradas sobre información específica, además de contar con sección de cursos y contacto.`,
            link: 'https://blogencafe.netlify.app/',
            imagen: proyectoBlogEnCafe,
            tecnologias: [html, css]
        }
    ]

    const titulo = 'Proyectos realizados'

    const renderProyectos = () => {
        const proyectosRenderizados = []
        proyectosRenderizados.push(
            proyectos.map((proyecto, index) => {
                return (
                    <CuadroProyecto
                        key={index}
                        index={index}
                        nombre={proyecto.nombreCompleto}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                        link={proyecto.link}
                        tecnologias={proyecto.tecnologias}
                    />
                )
            }))

        return proyectosRenderizados
    }

    return (
        <>
            <div className='proyectos-box'>
                <div className='proyectos-container'>
                    {/* <h1 className='proyectos-titulo'>{titulo.toUpperCase()}</h1> */}
                    {renderProyectos()}
                </div>
            </div>
        </>
    )
}

export default Proyectos