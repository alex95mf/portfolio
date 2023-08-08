import React, { useState } from 'react'
import CuadroTecnologia from './CuadroTecnologia';
import '../styles/habilidades.css'
import netCore from '../assets/icons/netCore.png';
import aspnetCore from '../assets/icons/aspnetCore.png';
import angular from '../assets/icons/angular.png';
import react from '../assets/icons/react.png';
import csharp from '../assets/icons/csharp.png';
import javascript from '../assets/icons/javascript.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import js from '../assets/icons/js.png';
import ts from '../assets/icons/ts.png';
import java from '../assets/icons/java.png';
import apirest from '../assets/icons/apirest.png';
import sqlserver from '../assets/icons/sqlserver.png';
import mysql from '../assets/icons/mysql.png';
import mongodb from '../assets/icons/mongodb.png';
import aws from '../assets/icons/aws.png';
import aspnetmvc from '../assets/icons/aspnetmvc.png';
import scrum from '../assets/icons/scrum.png';

function Habilidades() {
    const titulos = {
        frontend: "frontend",
        backend: "backend",
        database: "bases de datos",
        certifications: "certificaciones"
    }

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
                icono: apirest,
                alt: "API Rest | Infraestructura de microservicios",
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
                alt: "AWS Cloud Fundamentals",
                cantidad: 2023,
                esCertificado: true
            },
            {
                icono: csharp,
                nombre: "csharp",
                alt: "C# Profesional .NET",
                cantidad: 2021,
                esCertificado: true
            },
            {
                icono: aspnetmvc,
                nombre: "aspnetmvc",
                alt: "ASP.NET Core MVC",
                cantidad: 2022,
                esCertificado: true
            },
            {
                icono: aspnetCore,
                nombre: "aspnetwebapi",
                alt: "ASP.NET Core Web API",
                cantidad: 2022,
                esCertificado: true
            },
            {
                icono: sqlserver,
                nombre: "sqlserver",
                alt: "Master en SQL Server",
                cantidad: 2022,
                esCertificado: true
            },
            {
                icono: mysql,
                nombre: "relationaldatabase",
                alt: "Relational Database Administrator",
                cantidad: 2021,
                esCertificado: true
            },
            {
                icono: scrum,
                nombre: "scrum",
                alt: "SCRUM Developer & SDPC",
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
                            />
                        )
                    })}
                </div>
            )
        }
        return filas;
    }

    return (
        <>
            <div className={`habilidades-box`}>
                <div className='habilidades-container'>
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