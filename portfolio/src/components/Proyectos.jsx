import React, { useState } from 'react'
import '../styles/proyectos.css'
import CuadroProyecto from './CuadroProyecto'
import proyectoVeterinaria from '../assets/images/seguimientoveterinaria.webp'
import proyectobudgetMG from '../assets/images/budgetmg.webp'
import proyectoCriptoSearch from '../assets/images/criptosearch.webp'
import proyectoMethodicCalculator from '../assets/images/methodiccalculator.webp'
import proyectoRockedMusicFestival from '../assets/images/rockedmusicfestival.webp'
import proyectoTaskApp from '../assets/images/taskapp.webp'
import proyectoCoolStore from '../assets/images/coolstore.webp'
import proyectoBlogEnCafe from '../assets/images/blogencafe.webp'

function Proyectos({ appearingDirection, display }) {
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

    const proyectosInfo = display.projectsInfo

    const proyectos = [
        {
            nombre: 'seguimientoVeterinaria',
            nombreCompleto: proyectosInfo.veterinario.title,
            descripcion: proyectosInfo.veterinario.description,
            link: 'https://veterinario-online.netlify.app/',
            imagen: proyectoVeterinaria,
            tecnologias: [react, js, tailwindCss, vite]
        },
        {
            nombre: 'budgetMg',
            nombreCompleto: proyectosInfo.budget.title,
            descripcion: proyectosInfo.budget.description,
            link: 'https://presupuesto-management.netlify.app/',
            imagen: proyectobudgetMG,
            tecnologias: [react, js, css, vite, styledComponents]
        },
        {
            nombre: 'criptoSearch',
            nombreCompleto: proyectosInfo.cripto.title,
            descripcion: proyectosInfo.cripto.description,
            link: 'https://cripto-search.netlify.app/',
            imagen: proyectoCriptoSearch,
            tecnologias: [react, js, css, vite, cryptowatchApi]
        },
        {
            nombre: 'methodicCalculator',
            nombreCompleto: proyectosInfo.calculator.title,
            descripcion: proyectosInfo.calculator.description,
            link: 'https://methodic-calculator.netlify.app/',
            imagen: proyectoMethodicCalculator,
            tecnologias: [react, ts, html, css]
        },
        {
            nombre: 'rockedMusicFestival',
            nombreCompleto: proyectosInfo.festival.title,
            descripcion: proyectosInfo.festival.description,
            link: 'https://rockedmusicfestival.netlify.app/',
            imagen: proyectoRockedMusicFestival,
            tecnologias: [js, html, sass, scss]
        },
        {
            nombre: 'taskApp',
            nombreCompleto: proyectosInfo.task.title,
            descripcion: proyectosInfo.task.description,
            link: 'https://ramftaskapp.netlify.app/',
            imagen: proyectoTaskApp,
            tecnologias: [react, js, html, css]
        },
        {
            nombre: 'coolStore',
            nombreCompleto: proyectosInfo.store.title,
            descripcion: proyectosInfo.store.description,
            link: 'https://coolstore.netlify.app/',
            imagen: proyectoCoolStore,
            tecnologias: [html, css]
        },
        {
            nombre: 'blogEnCafe',
            nombreCompleto: proyectosInfo.blog.title,
            descripcion: proyectosInfo.blog.description,
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
                        display={display}
                    />
                )
            }))

        return proyectosRenderizados
    }

    return (
        <>
            <div className={`proyectos-box ${appearingDirection}`}>
                <div className='proyectos-container'>
                    {/* <h1 className='proyectos-titulo'>{titulo.toUpperCase()}</h1> */}
                    {renderProyectos()}
                </div>
            </div>
        </>
    )
}

export default Proyectos