import React, { useState } from 'react';
import '../styles/navigation.css'

function Navigation() {
    const pagina = {
        inicio: "inicio",
        habilidades: "habilidades",
        proyectos: "proyectos",
        sobreMi: "sobreMi",
        contacto: "contacto"
    }

    const [paginaSeleccionada, setPaginaSeleccionada] = useState(pagina.inicio)

    // Funcion para sombrear la pagina activa
    const handleInicio = () => {
        setPaginaSeleccionada(pagina.inicio);
    };
    const handleHabilidades = () => {
        setPaginaSeleccionada(pagina.habilidades);
    };
    const handleProyectos = () => {
        setPaginaSeleccionada(pagina.proyectos);
    };
    const handleSobreMi = () => {
        setPaginaSeleccionada(pagina.sobreMi);
    };
    const handleContacto = () => {
        setPaginaSeleccionada(pagina.contacto);
    };


    return (
        <>
            <div className='navigation-box'>
                <nav className='navigation'>
                    <ul>
                        <li><a className={`nav-item ${paginaSeleccionada == pagina.inicio
                            ? 'active' : ''}`} onClick={handleInicio}
                            href='#'>Inicio</a></li>
                        <li><a className={`nav-item ${paginaSeleccionada == pagina.habilidades
                            ? 'active' : ''}`} onClick={handleHabilidades}
                            href='#'>Habilidades</a></li>
                        <li><a className={`nav-item ${paginaSeleccionada == pagina.proyectos
                            ? 'active' : ''}`} onClick={handleProyectos}
                            href='#'>Proyectos</a></li>
                        <li><a className={`nav-item ${paginaSeleccionada == pagina.sobreMi
                            ? 'active' : ''}`} onClick={handleSobreMi}
                            href='#'>Sobre mi</a></li>
                        <li><a className={`nav-item ${paginaSeleccionada == pagina.contacto
                            ? 'active' : ''}`} onClick={handleContacto}
                            href='#'>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation