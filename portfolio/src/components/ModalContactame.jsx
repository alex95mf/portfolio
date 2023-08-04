import React, { useState } from 'react'
import '../styles/modalContactame.css'

function ModalContactame({ onClose, showModal }) {
    const nombre = "Nombre";
    const empresa = "Empresa";
    const email = "E-mail";
    const telefono = "Teléfono";
    const mensaje = "Mensaje";
    const tituloModal = "Información de contacto";

    // Enviar datos a email
    const enviarForm = () => {
        console.log("Enviando datos del formulario...")
    };

    return (

        <div className={`modal ${showModal ? 'abierto' : ''}`}>
            <div className={`modal-content ${showModal ? 'abierto' : ''}`}>
                <div className='modal-header'>
                    <h3>{tituloModal}</h3><span className="boton-cierre" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className='modal-body'>
                    <div className='input-container'>
                        <input type='text' />
                        <label className='input-label'>{nombre}</label>
                    </div>
                    <div className='input-container'>
                        <input type='text' />
                        <label className='input-label'>{empresa}</label>
                    </div>
                    <div className='input-section'>
                        <div className='input-container-section'>
                            <input type='email' />
                            <label className='input-label'>{email}</label>
                        </div>
                        <div className='input-container-section'>
                            <input type='tel' />
                            <label className='input-label'>{telefono}</label>
                        </div>
                    </div>
                    <div className='textarea-container'>
                        <textarea rows={6} cols={32}></textarea>
                        <label className='input-label'>{mensaje}</label>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className='modal-boton modal-boton-enviar' onClick={enviarForm}>Enviar</button>
                    <button className='modal-boton modal-boton-cerrar' onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalContactame