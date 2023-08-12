import React from 'react';
import '../styles/head.css'
import pdfCVESP from '../assets/documents/cvesp.pdf';
import pdfCVENG from '../assets/documents/cveng.pdf';

function Head({ name, display }) {
    // const nombreCVESP = 'Curriculum Vitae Alexander Martinez'
    const nombreCV = display.pages.skills.resumeTextname
    const descargarCV = () => {
        let idioma = 'es'
        if (display.pages.skills.yearText == 'year') {
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
            <div className='head-box'>
                <h1 className='head-text' onClick={descargarCV}>
                    <span>{name}</span> Developer
                </h1>
            </div>
        </>
    )
}

export default Head