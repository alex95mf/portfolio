import React, { useState } from 'react'
import '../styles/modalContactame.css'

function ModalContactame({ onClose, showModal, configurarMensajeError }) {
    const nombre = "*Nombre";
    const empresa = "*Empresa";
    const email = "*E-mail";
    const telefono = "Teléfono";
    const mensaje = "*Mensaje";
    const tituloModal = "Información de contacto";

    const [inputNombre, setInputNombre] = useState('');
    const [inputEmpresa, setInputEmpresa] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTelefono, setInputTelefono] = useState('');
    const [inputMensaje, setInputMensaje] = useState('');

    const formulario = {
        nombre: null,
        empresa: null,
        email: null,
        telefono: null,
        mensaje: null
    }

    // Llenado del formulario
    const llenarNombre = (entrada) => {
        setInputNombre(entrada.target.value)
    }
    const llenarEmpresa = (entrada) => {
        setInputEmpresa(entrada.target.value)
    }
    const llenarEmail = (entrada) => {
        setInputEmail(entrada.target.value)
    }
    const llenarTelefono = (entrada) => {
        setInputTelefono(entrada.target.value)
    }
    const llenarMensaje = (entrada) => {
        setInputMensaje(entrada.target.value)
    }

    // Validar datos de formulario
    const validarEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(inputEmail)
    }

    const validarTelefono = () => {
        if (inputTelefono.trim() == '') {
            return true
        }
        const phoneNumberPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        return phoneNumberPattern.test(inputTelefono)
    }

    const validarForm = () => {
        if (inputNombre.trim() == '') {
            return 1
        }
        if (inputEmpresa.trim() == '') {
            return 1
        }
        if (inputEmail.trim() == '') {
            return 1
        }
        if (inputMensaje.trim() == '') {
            return 1
        }
        if (!validarEmail()) {
            return 2
        }
        if (!validarTelefono()) {
            return 3
        }
        return 0
    }

    // Enviar datos a email
    const enviarForm = () => {
        const esValido = validarForm()
        if (esValido == 0) {
            formulario.nombre = inputNombre;
            formulario.empresa = inputEmpresa;
            formulario.email = inputEmail;
            formulario.telefono = inputTelefono;
            formulario.mensaje = inputMensaje;
            console.log(formulario)
            console.log('Enviando Formulario')
        } else if (esValido == 1) {
            configurarMensajeError('Debe llenar todos los campos obligatorios')
        } else if (esValido == 2) {
            configurarMensajeError('Debe ingresar un email válido')
        } else if (esValido == 3) {
            configurarMensajeError('Debe ingresar un número de teléfono válido')
        }
    };

    const handleModalClickAfuera = (event) => {
        // if (event.target === event.currentTarget) {
        //     onClose();
        // }
    }

    return (
        <>
            <div className={`modal ${showModal ? 'abierto' : ''}`} onClick={handleModalClickAfuera}>
                <div className={`modal-content ${showModal ? 'abierto' : ''}`}>
                    <div className='modal-header'>
                        <h3>{tituloModal}</h3><span className="boton-cierre" onClick={onClose} >
                            &times;
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='input-container'>
                            <input type='text' onChange={llenarNombre} />
                            <label className='input-label'>{nombre}</label>
                        </div>
                        <div className='input-container'>
                            <input type='text' onChange={llenarEmpresa} />
                            <label className='input-label'>{empresa}</label>
                        </div>
                        <div className='input-section'>
                            <div className='input-container-section'>
                                <input type='email' onChange={llenarEmail} />
                                <label className='input-label'>{email}</label>
                            </div>
                            <div className='input-container-section'>
                                <input type='tel' onChange={llenarTelefono} />
                                <label className='input-label'>{telefono}</label>
                            </div>
                        </div>
                        <div className='textarea-container'>
                            <textarea rows={6} cols={32} onChange={llenarMensaje}></textarea>
                            <label className='input-label'>{mensaje}</label>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button className='modal-boton modal-boton-enviar' onClick={enviarForm}>Enviar</button>
                        <button className='modal-boton modal-boton-cerrar' onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ModalContactame