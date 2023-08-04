import React, { useState } from 'react';
import '../styles/navigation.css'

function Navigation() {
    const pagina = {
        inicio: 'Inicio',
        habilidades: 'Habilidades',
        proyectos: 'Proyectos',
        sobreMi: 'Sobre mi',
        contacto: 'Contacto',
    };

    const [paginaSeleccionada, setPaginaSeleccionada] = useState(pagina.inicio);

    const handlePaginaClick = (nombrePagina) => {
        setPaginaSeleccionada(nombrePagina);
    };

    return (
        <>
            <div className='navigation-box'>
                <nav className='navigation'>
                    <ul>
                        {Object.values(pagina).map((nombrePagina) => (
                            <li key={nombrePagina}>
                                <a
                                    className={`nav-item ${paginaSeleccionada === nombrePagina ? 'active' : ''}`}
                                    onClick={() => handlePaginaClick(nombrePagina)}
                                    href='#'
                                >
                                    {nombrePagina}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navigation