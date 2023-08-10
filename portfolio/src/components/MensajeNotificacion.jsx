import React from 'react'
import '../styles/mensajeNotificacion.css'

function MensajeNotificacion({ mensaje, esOk = false }) {
    return (
        <div className={`notificacion-box ${esOk ? 'esok' : ''}`}>
            <p>{mensaje}</p>
        </div>
    )
}

export default MensajeNotificacion