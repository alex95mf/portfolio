import React, { useState } from 'react';
import '../styles/navigation.css'
import LanguageSwitcher from './LanguageSwitcher';

function Navigation({ pagina, paginaActual, handlePaginaClick, displayPagina }) {
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
                                    {displayPagina[nombrePagina.toLowerCase()]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* <LanguageSwitcher /> */}
            </div>
        </>
    );
}

export default Navigation