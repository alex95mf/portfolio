import React, { useState } from 'react'
import CuadroTecnologia from './CuadroTecnologia';
import '../styles/habilidades.css'
import netCore from '../assets/icons/netCore.webp';
import aspnetCore from '../assets/icons/aspnetCore.webp';
import angular from '../assets/icons/angular.webp';
import react from '../assets/icons/react.webp';
import csharp from '../assets/icons/csharp.webp';
import html from '../assets/icons/html.webp';
import css from '../assets/icons/css.webp';
import js from '../assets/icons/js.webp';
import ts from '../assets/icons/ts.webp';
import java from '../assets/icons/java.webp';
import apirest from '../assets/icons/apirest.webp';
import sqlserver from '../assets/icons/sqlserver.webp';
import mysql from '../assets/icons/mysql.webp';
import mongodb from '../assets/icons/mongodb.webp';
import aws from '../assets/icons/aws.webp';
import aspnetmvc from '../assets/icons/aspnetmvc.webp';
import scrum from '../assets/icons/scrum.webp';
import nodejs from '../assets/icons/nodejs.webp'
import fotoPerfil from '../assets/images/fotoperfil.webp';
import pdfCVESP from '../assets/documents/cvesp.pdf';
import pdfCVENG from '../assets/documents/cveng.pdf';
import iconoDescargarCV from '../assets/icons/descargaA.webp'

function Habilidades({ appearingDirection, display }) {
    const titulos = {
        frontend: "frontend",
        backend: "backend",
        database: display.databasestitle,
        certifications: display.certifications.title
    }

    const nombreCV = display.resumeTextname

    const textoDescargarCV = display.downloadCVText

    const textoSobreMi = display.summary

    const tecnologias = {
        frontend: [
            {
                icono: csharp,
                alt: "C#",
                cantidad: 2
            },
            {
                icono: js,
                alt: "Javascript",
                cantidad: 4
            },
            {
                icono: ts,
                alt: "Typescript",
                cantidad: 1
            },
            {
                icono: html,
                alt: "Html",
                cantidad: 4
            },
            {
                icono: css,
                alt: "CSS",
                cantidad: 4
            },
            {
                icono: netCore,
                alt: ".NET Core",
                cantidad: 2
            },
            {
                icono: aspnetCore,
                alt: "ASP.NET Core",
                cantidad: 2
            },
            {
                icono: react,
                alt: "React",
                cantidad: 1
            },
            {
                icono: angular,
                alt: "Angular",
                cantidad: 2
            }],
        backend: [
            {
                icono: csharp,
                alt: "C#",
                cantidad: 2
            },
            {
                icono: netCore,
                alt: ".NET Core",
                cantidad: 2
            },
            {
                icono: aspnetCore,
                alt: "ASP.NET Core",
                cantidad: 2
            },
            {
                icono: nodejs,
                alt: "NodeJS",
                cantidad: 2
            },
            {
                icono: java,
                alt: "Java",
                cantidad: 1
            }],
        database: [
            {
                icono: sqlserver,
                alt: "SQL Server",
                cantidad: 2
            },
            {
                icono: mysql,
                alt: "MySQL",
                cantidad: 2
            },
            {
                icono: mongodb,
                alt: "Mongo DB | NoSQL",
                cantidad: 1
            }],
        certifications: [
            {
                icono: aws,
                nombre: "awsfundamentals",
                alt: display.certifications.aws,
                cantidad: 2023,
                esCertificado: true
            },
            {
                icono: csharp,
                nombre: "csharp",
                alt: display.certifications.csharp,
                cantidad: 2021,
                esCertificado: true
            },
            {
                icono: aspnetmvc,
                nombre: "aspnetmvc",
                alt: display.certifications.aspnetmvc,
                cantidad: 2022,
                esCertificado: true
            },
            {
                icono: aspnetCore,
                nombre: "aspnetwebapi",
                alt: display.certifications.aspnetwebapi,
                cantidad: 2022,
                esCertificado: true
            },
            {
                icono: sqlserver,
                nombre: "sqlserver",
                alt: display.certifications.sqlserver,
                cantidad: 2022,
                esCertificado: true
            },
            {
                icono: mysql,
                nombre: "relationaldatabase",
                alt: display.certifications.mysql,
                cantidad: 2021,
                esCertificado: true
            },
            {
                icono: scrum,
                nombre: "scrum",
                alt: display.certifications.scrum,
                cantidad: 2022,
                esCertificado: true
            }
        ]
    }

    const renderFilasTecnologias = (tecnologias, cantidadElementos = 5) => {
        const filas = [];
        const elementosPorFila = cantidadElementos;

        for (let i = 0; i < tecnologias.length; i += elementosPorFila) {
            const fila = tecnologias.slice(i, i + elementosPorFila);
            filas.push(
                <div className='fila' key={i}>
                    {fila.map((tecnologia, index) => {
                        return (
                            <CuadroTecnologia
                                key={index}
                                icono={tecnologia.icono}
                                alt={tecnologia.alt}
                                cantidad={tecnologia.cantidad}
                                esCertificado={tecnologia.esCertificado}
                                nombre={tecnologia.nombre}
                                yearText={display.yearText}
                                display={display}
                            />
                        )
                    })}
                </div>
            )
        }
        return filas;
    }

    const descargarCV = () => {
        let idioma = 'es'
        if (display.yearText == 'year') {
            idioma = 'en'
        }
        const link = document.createElement('a');
        if (idioma == 'es') {
            link.href = pdfCVESP;
        } else {
            link.href = pdfCVENG;
        }
        link.download = `${nombreCV}.pdf`;
        link.target = '_blank';
        link.click();
    }

    return (
        <>
            <div className={`habilidades-box ${appearingDirection}`}>
                <div className='habilidades-container'>
                    <div className='habilidades-sobremi-container'>
                        <div className='habilidades-perfil-container'>
                            <img className='habilidades-fotoperfil' src={fotoPerfil} alt={'Foto perfil emprendedor'} />
                            <button
                                onClick={descargarCV} title='Descargar Curriculum Vitae'
                                className='habilidades-botondescarga'>
                                <p className='habilidades-textodescargacv'> {textoDescargarCV}</p>
                                <img className='habilidades-iconodescargacv' src={iconoDescargarCV} alt='Icono Descargar DV' />
                            </button>
                        </div>
                        <p className='habilidades-textoperfil'>{textoSobreMi}</p>
                    </div>
                    <div className='habilidades-tecnologie-container'>
                        <div className='habilidades-titulo-container'>
                            <h2>{titulos.frontend.toUpperCase()}</h2>
                        </div>
                        <div className='tecnologies'>
                            {renderFilasTecnologias(tecnologias.frontend)}
                        </div>
                    </div>
                    <div className='habilidades-tecnologie-container'>
                        <div className='habilidades-titulo-container'>
                            <h2>{titulos.backend.toUpperCase()}</h2>
                        </div>
                        <div className='tecnologies'>
                            {renderFilasTecnologias(tecnologias.backend)}
                        </div>
                    </div>
                    <div className='habilidades-tecnologie-container'>
                        <div className='habilidades-titulo-container'>
                            <h2>{titulos.database.toUpperCase()}</h2>
                        </div>
                        <div className='tecnologies'>
                            {renderFilasTecnologias(tecnologias.database)}
                        </div>
                    </div>
                    <div className='habilidades-tecnologie-container certifications'>
                        <h2>{titulos.certifications.toUpperCase()}</h2>
                        <div className='tecnologies'>
                            {renderFilasTecnologias(tecnologias.certifications, 4)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habilidades