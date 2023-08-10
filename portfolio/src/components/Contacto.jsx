import React, { useState } from 'react'
import '../styles/contacto.css'
import '../styles/modalContactame.css'
import BotonContactame from './BotonContactame';
import ModalContactame from './ModalContactame';

function Contacto({ openModal, closeModal, showModal, configurarMensajeNotificacion, mensajeNotificacion }) {
    const titulo = 'Información de contacto'
    const telefono = '+593 993414364'
    const telefonoLink = '+593993414364'
    const email = 'alex95mf@gmail.com'
    const mensaje = ``

    const openWpp = () => {
        const url = `https://wa.me/${telefonoLink}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    return (
        <>
            <div className='contacto-box'>
                <div className='contacto-izquierda'>
                    <h2 className='contacto-titulo'>{titulo}</h2>
                    <p><span>Teléfono: </span>{telefono}</p>
                    <p><span>E-mail: </span>{email}</p>
                </div>
                <div className='contacto-derecha'>
                    <div>
                        <BotonContactame onClick={openModal} />
                        <ModalContactame
                            onClose={closeModal}
                            showModal={showModal}
                            configurarMensajeNotificacion={configurarMensajeNotificacion}
                            mensajeNotificacion={mensajeNotificacion}
                        />
                    </div>
                    <div>
                        <BotonContactame esWpp={true} onClick={openWpp} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contacto