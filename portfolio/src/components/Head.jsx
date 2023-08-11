import React from 'react';
import '../styles/head.css'
import pdfCVESP from '../assets/documents/cvesp.pdf';
import pdfCVENG from '../assets/documents/cveng.pdf';

function Head({ name }) {
    const nombreCVESP = 'Curriculum Vitae Alexander Martinez'
    const descargarCV = () => {
        const link = document.createElement('a');
        link.href = pdfCVESP;
        link.download = `${nombreCVESP}.pdf`;
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