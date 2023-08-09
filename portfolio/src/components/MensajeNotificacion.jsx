import React from 'react'
import '../styles/MensajeNotificacion.css'

function MensajeNotificacion({ mensaje }) {
    return (
        <div className='notificacion-box'>
            <p>{mensaje}</p>
        </div>
    )
}

export default MensajeNotificacion