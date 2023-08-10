import React, { useState } from 'react';
import '../styles/inicio.css'
import BotonContactame from './BotonContactame';
import ModalContactame from './ModalContactame';
import CuadroOpcion from './CuadroOpcion';

function Inicio({ appearingDirection }) {
    // Variables de cuadros de opciones (Frontend y Backend)
    const [cuadroIzquierdo, setCuadroIzquierdo] = useState(false);
    const [cuadroDerecho, setCuadroDerecho] = useState(false);

    // Activa y desactiva variable para resaltar la opcion (cuadro) donde esta el mouse
    const resaltarCuadroIzquierdo = (e) => {
        e.stopPropagation();
        setCuadroIzquierdo(true);
    };

    const atenuarCuadroIzquierdo = (e) => {
        e.stopPropagation();
        setCuadroIzquierdo(false);
    };

    const resaltarCuadroDerecho = (e) => {
        e.stopPropagation();
        setCuadroDerecho(true);
    };

    const atenuarCuadroDerecho = (e) => {
        e.stopPropagation();
        setCuadroDerecho(false);
    };

    return (
        <>
            <div className={`inicio-box ${appearingDirection}`}>
                <div className='section-box'>
                    <CuadroOpcion
                        cuadroSeleccionado={cuadroIzquierdo}
                        cuadroNoSeleccionado={cuadroDerecho}
                        resaltarCuadro={resaltarCuadroIzquierdo}
                        atenuarCuadro={atenuarCuadroIzquierdo}
                        textoTipo={`frontend`}
                        descripcion={` Desarrollo de proyectos de frontend con base en habilidades sólidas
                        para la creación de interfaces de usuario atractivas y funcionales,
                        con un enfoque centrado en el usuario.`}>
                    </CuadroOpcion>
                    <CuadroOpcion
                        cuadroSeleccionado={cuadroDerecho}
                        cuadroNoSeleccionado={cuadroIzquierdo}
                        resaltarCuadro={resaltarCuadroDerecho}
                        atenuarCuadro={atenuarCuadroDerecho}
                        textoTipo={`backend`}
                        descripcion={`Creación de software de backend robustos y eficientes que brindan soluciones
                        confiables, y garantizan el funcionamiento óptimo y seguro del sistema.`}>
                    </CuadroOpcion>
                </div>
            </div >
        </>
    )
}

export default Inicio