import React, { useState, useRef } from 'react'
import '../styles/modalContactame.css'
import MensajeNotificacion from './MensajeNotificacion';
import { Audio, Bars, Circles, ColorRing, MutatingDots, Oval, ProgressBar, Puff, Radio, RevolvingDot, Rings, RotatingLines, RotatingSquare, RotatingTriangles, TailSpin, ThreeCircles, ThreeDots, Vortex, Watch } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; // Importa los estilos CSS


function ModalContactame({ onClose, showModal, configurarMensajeNotificacion, mensajeNotificacion }) {
    const nombre = "*Nombre";
    const empresa = "*Empresa";
    const email = "*E-mail";
    const telefono = "Teléfono";
    const mensaje = "*Mensaje";
    const tituloModal = "Información de contacto";

    const urlApi = '/enviar-correo'
    const urlBackendDev = 'http://localhost:3500'
    const urlBackendProd = ''

    const [inputNombre, setInputNombre] = useState('');
    const [inputEmpresa, setInputEmpresa] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTelefono, setInputTelefono] = useState('');
    const [inputMensaje, setInputMensaje] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inputNombreRef = useRef(null);
    const inputEmpresaRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputTelefonoRef = useRef(null);
    const inputMensajeRef = useRef(null);

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

    const limpiarModal = () => {
        setInputNombre('')
        setInputEmpresa('')
        setInputEmail('')
        setInputTelefono('')
        setInputMensaje('')
        inputNombreRef.current.value = '';
        inputEmpresaRef.current.value = '';
        inputEmailRef.current.value = '';
        inputTelefonoRef.current.value = '';
        inputMensajeRef.current.value = '';
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
    const enviarForm = async () => {
        const esValido = validarForm()
        if (esValido == 0) {
            formulario.nombre = inputNombre;
            formulario.empresa = inputEmpresa;
            formulario.email = inputEmail;
            formulario.telefono = inputTelefono;
            formulario.mensaje = inputMensaje;
            try {
                setIsLoading(true)
                const respuesta = await fetch(urlBackendDev + urlApi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formulario)
                })
                if (respuesta.ok) {
                    setIsLoading(false)
                    configurarMensajeNotificacion('Formulario enviado exitosamente');
                    setTimeout(() => {
                        onClose();
                    }, 500)
                    setTimeout(() => {
                        limpiarModal();
                    }, 500)
                } else {
                    setIsLoading(false)
                    configurarMensajeNotificacion('Error al enviar el formulario');
                }
            } catch (error) {
                setIsLoading(false)
                configurarMensajeNotificacion(`Error en la solicitud: ${error}`);
            }

        } else if (esValido == 1) {
            configurarMensajeNotificacion('Debe llenar todos los campos obligatorios')
        } else if (esValido == 2) {
            configurarMensajeNotificacion('Debe ingresar un email válido')
        } else if (esValido == 3) {
            configurarMensajeNotificacion('Debe ingresar un número de teléfono válido')
        }
    };

    const handleModalClickAfuera = (event) => {
        // if (event.target === event.currentTarget) {
        //     onClose();
        // }
    }

    return (
        <>
            <div className={`modal ${showModal ? 'abierto' : ''} ${isLoading ? 'loading' : ''}`} onClick={handleModalClickAfuera}>
                <div className={`modal-content ${showModal ? 'abierto' : ''} ${isLoading ? 'loading' : ''}`}>
                    <div className='modal-header'>
                        <h3>{tituloModal}</h3><span className="boton-cierre" onClick={onClose} >
                            &times;
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='input-container'>
                            <input ref={inputNombreRef} type='text' onChange={llenarNombre} />
                            <label className='input-label'>{nombre}</label>
                        </div>
                        <div className='input-container'>
                            <input ref={inputEmpresaRef} type='text' onChange={llenarEmpresa} />
                            <label className='input-label'>{empresa}</label>
                        </div>
                        <div className='input-section'>
                            <div className='input-container-section'>
                                <input ref={inputEmailRef} type='email' onChange={llenarEmail} />
                                <label className='input-label'>{email}</label>
                            </div>
                            <div className='input-container-section'>
                                <input ref={inputTelefonoRef} type='tel' onChange={llenarTelefono} />
                                <label className='input-label'>{telefono}</label>
                            </div>
                        </div>
                        <div className='textarea-container'>
                            <textarea ref={inputMensajeRef} rows={6} cols={32} onChange={llenarMensaje}></textarea>
                            <label className='input-label'>{mensaje}</label>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button className='modal-boton modal-boton-enviar' onClick={enviarForm}>Enviar</button>
                        <button className='modal-boton modal-boton-cerrar' onClick={onClose}>Cerrar</button>
                    </div>
                </div>
                {isLoading && <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color='white'
                    ariaLabel='three-dots-loading'
                    wrapperStyle={{}}
                    wrapperClass='modal-spinner'
                />}
            </div >
        </>
    )
}

export default ModalContactame