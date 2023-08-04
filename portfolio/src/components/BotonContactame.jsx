import React from 'react'
import '../styles/botonContactame.css'

function BotonContactame({ onClick, onClose }) {
    return (
        <div className='contactame-box'>
            <button type='button' onClick={onClick} className='boton-form'>Contáctame</button>
        </div>
    )
}

export default BotonContactame
