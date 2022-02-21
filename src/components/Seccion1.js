import React from 'react'
import logonbc from '../imagenes/logoNBC.png';

export const Seccion1 = () => {
    return (
        <div className='contenedor-principal-seecion1'>

            <div className='cont-autor-logo-linea'>
                <div className='logo-autor'>
                    <div className='logo-nbc'>
                        <img
                            src={logonbc}
                            alt='logoNBC'
                            className='logo'
                        />
                    </div>
                    <div className='autor-cont'>
                        by Samantha Cassetty, RD / May.26.2018
                    </div>
                </div>
                <div className='linea-logo-autor'></div>
            </div>

            <div className='cont-titulo-parrafo-boton'>
                <div className='borde-amarillo-izq'></div>
                <div className='titulo-parrafo-boton'>
                    <h1>How To Build A Better Smoothie</h1>
                    <p>If you’re turning to smoothies as part of your strategy to lose weight or take your healthy eating up a notch, your menu may need a little attention. </p>
                    <button className='boton-read-more'>read more</button>
                </div>
            </div>

        </div>
    )
}
