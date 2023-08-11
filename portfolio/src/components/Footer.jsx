import React from 'react';
import '../styles/footer.css'

function Footer({ display }) {
    return (
        <>
            <div className='footer-box'>
                <h1 className='footer-text'>
                    {display.text} - {display.name}
                </h1>
            </div>
        </>
    )
}

export default Footer