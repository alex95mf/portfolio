import React from 'react';
import '../styles/navigation.css'

function Navigation() {
    return (
        <>
            <div className='navigation-box'>
                <nav className='navigation'>
                    <ul>
                        <li><a href='/home'>Inicio</a></li>
                        <li><a href='/about'>Sobre mi</a></li>
                        <li><a href='/skill'>Habilidades</a></li>
                        <li><a href='/project'>Proyectos</a></li>
                        <li><a href='/contact'>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation