import React from 'react'
import "../styles/cuadroTecnologia.css";
import pdfcsharp from '../assets/documents/csharpENG.pdf';
import pdfaspnetmvc from '../assets/documents/aspnetmvcENG.pdf';
import pdfaspnetwebapi from '../assets/documents/aspnetwebapiENG.pdf';
import pdfsqlserver from '../assets/documents/sqlserverENG.pdf';
import pdfawsfundamentals from '../assets/documents/awsfundamentals.pdf';
import pdfrelationaldatabase from '../assets/documents/relationaldatabase.pdf';
import pdfscrum from '../assets/documents/scrum.pdf';

function CuadroTecnologia({ icono, alt, cantidad, esCertificado, nombre }) {
    let clase = "tecnologia";
    if (esCertificado) {
        clase = "certificado";
    }

    const certificados = [
        {
            nombre: "csharp",
            nombreCompleto: "C# Professional .NET",
            certificado: pdfcsharp
        },
        {
            nombre: "aspnetmvc",
            nombreCompleto: "ASP.NET MVC",
            certificado: pdfaspnetmvc
        },
        {
            nombre: "aspnetwebapi",
            nombreCompleto: "ASP.NET Web API",
            certificado: pdfaspnetwebapi
        },
        {
            nombre: "awsfundamentals",
            nombreCompleto: "AWS Cloud",
            certificado: pdfawsfundamentals
        },
        {
            nombre: "relationaldatabase",
            nombreCompleto: "Relational Database Adminsitrator",
            certificado: pdfrelationaldatabase
        },
        {
            nombre: "sqlserver",
            nombreCompleto: "SQL Server Master",
            certificado: pdfsqlserver
        },
        {
            nombre: "scrum",
            nombreCompleto: "Scrum Developer & SDPC",
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
                    <img src={icono} alt={alt} loading='lazy' />
                </div>
                <div className={`cuadro-${clase}-texto`}>
                    <p>{`${esCertificado ? alt : cantidad > 1 ? cantidad + ' años' : cantidad + ' año'}`}</p>
                </div>
            </div>
        </div>
    )
}

export default CuadroTecnologia