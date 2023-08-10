import React, { useState } from 'react';
import Imagen from './Imagen';
import frontendImage from '../assets/images/frontend.webp';
import backendImage from '../assets/images/backend.webp';
import '../styles/cuadroOpcion.css'

function CuadroOpcion({
    cuadroSeleccionado,
    cuadroNoSeleccionado,
    resaltarCuadro,
    atenuarCuadro,
    textoTipo,
    descripcion }) {

    // Estilo de símbolos < y >
    const aperturas = {
        fontSize: 'xxx-large'
    };

    let imagenTipo;

    if (textoTipo == 'backend') {
        imagenTipo = 'Frontend';
    } else {
        imagenTipo = 'Backend';
    }

    return (
        <>
            <div className={`section ${textoTipo} ${cuadroSeleccionado ? 'resaltar' : ''}`}
                onMouseOver={resaltarCuadro}
                onMouseOut={atenuarCuadro}>
                <div className='contenedor-cuadro'>
                    <div className='contenedor-cuadro-texto'>
                        {textoTipo == 'backend'
                            ?
                            <h2 className='m-l'>
                                {textoTipo.toUpperCase()}
                                <span style={aperturas}>
                                    &gt;</span>
                            </h2>
                            :
                            <h2 className='m-r'>
                                <span style={aperturas}>&lt; </span>{textoTipo.toUpperCase()}
                            </h2>
                        }

                        <p className={`descripcion ${cuadroSeleccionado ?
                            'activo' : ''}`}>
                            {descripcion}
                        </p>
                    </div>
                    <div className={`contenedor-imagen ${textoTipo} ${cuadroNoSeleccionado
                        ? 'activo' : ''}`}>
                        <Imagen
                            imagen={textoTipo == 'backend' ? frontendImage : backendImage}
                            altDescripcion={`Imagen ${imagenTipo}`}>
                        </Imagen>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CuadroOpcion