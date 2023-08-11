import React from 'react'
import "../styles/cuadroTecnologia.css";
import pdfcsharpENG from '../assets/documents/csharpENG.pdf';
import pdfcsharpESP from '../assets/documents/csharpESP.pdf';
import pdfaspnetmvcENG from '../assets/documents/aspnetmvcENG.pdf';
import pdfaspnetmvcESP from '../assets/documents/aspnetmvcESP.pdf';
import pdfaspnetwebapiENG from '../assets/documents/aspnetwebapiENG.pdf';
import pdfaspnetwebapiESP from '../assets/documents/aspnetwebapiESP.pdf';
import pdfsqlserverENG from '../assets/documents/sqlserverENG.pdf';
import pdfsqlserverESP from '../assets/documents/sqlserverESP.pdf';
import pdfawsfundamentals from '../assets/documents/awsfundamentals.pdf';
import pdfrelationaldatabase from '../assets/documents/relationaldatabase.pdf';
import pdfscrum from '../assets/documents/scrum.pdf';
import iconoDescargarCV from '../assets/icons/descargaB.webp'

function CuadroTecnologia({ icono, alt, cantidad, esCertificado, nombre, yearText, display }) {
    let clase = "tecnologia";
    if (esCertificado) {
        clase = "certificado";
    }

    let idioma = 'es'
    if (yearText == 'year') {
        idioma = 'en'
    }

    const certificados = [
        {
            nombre: "csharp",
            nombreCompleto: display.certifications.csharp,
            certificado: idioma == 'es' ? pdfcsharpESP : pdfcsharpENG
        },
        {
            nombre: "aspnetmvc",
            nombreCompleto: display.certifications.aspnetmvc,
            certificado: idioma == 'es' ? pdfaspnetmvcESP : pdfaspnetmvcENG
        },
        {
            nombre: "aspnetwebapi",
            nombreCompleto: display.certifications.aspnetwebapi,
            certificado: idioma == 'es' ? pdfaspnetwebapiESP : pdfaspnetwebapiENG
        },
        {
            nombre: "awsfundamentals",
            nombreCompleto: display.certifications.aws,
            certificado: pdfawsfundamentals
        },
        {
            nombre: "relationaldatabase",
            nombreCompleto: display.certifications.mysql,
            certificado: pdfrelationaldatabase
        },
        {
            nombre: "sqlserver",
            nombreCompleto: display.certifications.sqlserver,
            certificado: idioma == 'es' ? pdfsqlserverESP : pdfsqlserverENG
        },
        {
            nombre: "scrum",
            nombreCompleto: display.certifications.scrum,
            certificado: pdfscrum
        }
    ];

    const descargarCertificado = (nombreCertificado) => {
        for (const certificado of certificados) {
            if (certificado.nombre == nombreCertificado) {
                const link = document.createElement('a');
                link.href = certificado.certificado;
                link.download = `${certificado.nombreCompleto}.pdf`;
                link.target = '_blank';
                link.click();
            }
        }
    }

    return (
        <div title={alt} className={`cuadro-${clase}-box`} onClick={() => descargarCertificado(nombre)}>
            <div>
                <div className={`cuadro-${clase}-encuadre`}>
                    <img src={icono} alt={alt} rel='preload' />
                    {esCertificado && <img className='cuadro-descarga' src={iconoDescargarCV} alt='Icono descargar certificado' />}
                </div>
                <div className={`cuadro-${clase}-texto`}>
                    <p>{`${esCertificado ? alt : cantidad > 1 ? cantidad + ' ' + yearText + 's' : cantidad + ' ' + yearText}`}</p>
                </div>
            </div>
        </div>
    )
}

export default CuadroTecnologia