import React from 'react'
import '../styles/imagen.css';

function Imagen({ imagen, altDescripcion }) {
    return (
        <>
            <img className='imagen' src={imagen} alt={altDescripcion} />
        </>
    )
}

export default Imagen