import React, { useState } from 'react';
import '../styles/navigation.css'

function Navigation({ pagina, paginaActual, handlePaginaClick }) {
    return (
        <>
            <div className='navigation-box'>
                <nav className='navigation'>
                    <ul>
                        {Object.values(pagina).map((nombrePagina) => (
                            <li key={nombrePagina}>
                                <a
                                    className={`nav-item ${paginaActual === nombrePagina
                                        ? 'active' : ''}`}
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