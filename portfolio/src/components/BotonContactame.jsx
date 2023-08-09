import React from 'react'
import '../styles/botonContactame.css'
import imagenWpp from '../assets/images/wpp.webp';

function BotonContactame({ onClick, onClose, esWpp }) {
    const textoBoton = {
        email: 'Contáctame',
        wpp: 'WhatsApp'
    }
    return (
        <div className='contactame-box'>
            <button type='button' onClick={onClick} className={`boton-form ${esWpp ? 'wpp' : ''}`}>
                {/* {`${esWpp ? textoBoton.wpp : textoBoton.email}`} */}
                {esWpp && <img className='contactame-imagenwpp' src={imagenWpp} alt='Logo Whatsapp' />}
                <p>{`${esWpp ? textoBoton.wpp : textoBoton.email}`}</p>
            </button>
        </div>
    )
}

export default BotonContactame
