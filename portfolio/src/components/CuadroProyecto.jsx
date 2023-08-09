import React from 'react'
import '../styles/cuadroProyecto.css'

function CuadroProyecto({ nombre, descripcion, imagen, link, tecnologias, index }) {
    const escribirTecnologias = () => {
        const resultado = []
        let textoTecnologias = ''

        tecnologias.map((tecnologia, index) => {
            if (index == 0) {
                textoTecnologias = textoTecnologias + tecnologia
            } else {
                textoTecnologias = textoTecnologias + ', ' + tecnologia
            }
        })

        resultado.push(
            <span className='proyecto-tecnologias-texto' key={index}>{textoTecnologias}</span>
        )

        return resultado
    }

    return (
        <div className='proyecto-container'>
            <div className='proyecto-titulo'>
                <h2>{nombre}</h2>
            </div>
            <div className='proyecto-contenido'>
                <a className='proyecto-link' href={link} target='_blank' rel='noopener noreferrer'>
                    <img className='proyecto-imagen' src={imagen} alt={nombre} loading='lazy' />
                    <p className='proyecto-link-texto' title={link}>Ir al sitio web</p>
                </a>
                <div className='proyecto-texto'>
                    <p className='proyecto-descripcion'>{descripcion}</p>
                    <p className='proyecto-tecnologias'>Tecnologías: {escribirTecnologias()}</p>
                </div>
            </div>
        </div>
    )
}

export default CuadroProyecto