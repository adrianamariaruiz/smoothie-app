import React from 'react';
import ensalada4 from '../imagenes/ensalada.png';
import fuerza4 from '../imagenes/fuerza.png';
import cintura4 from '../imagenes/cintura.png';



export const Seccion4 = () => {
    return (
        <div className='contenedor-principal-seccion4'>
            <div className='texto-cont-sec4'>
                <h1>Are You Ready To Take The Challenge?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
            <div className='cont-3-bloques-sec4'>
                <div className='bloque1-sec4'>
                    <img
                        src={ensalada4}
                        alt='imagen-ensalada'
                        className='imagen-ensalada4'
                    />
                    <h1>Arranging A Nutrition Plan</h1>
                    <h5></h5>
                    <p>Mauris semper auctor odio, et consectetur magna ullamcorper mollis nulla.</p>
                </div>

                <div className='bloque2-sec4'>
                    <img
                        src={fuerza4}
                        alt='imagen'
                        className='imagen-fuerza4'
                    />
                    <h1>Implementation Of The Plan</h1>
                    <h5></h5>
                    <p>Mauris semper auctor odio, et consectetur magna ullamcorper mollis nulla.</p>
                </div>

                <div className='bloque3-sec4'>
                    <img
                        src={cintura4}
                        alt='imagen-cintura'
                        className='imagen-cintura4'
                    />
                    <h1>Comprehensive Body Measurement</h1>
                    <h5></h5>
                    <p>Mauris semper auctor odio, et consectetur magna ullamcorper mollis nulla.</p>
                </div>

            </div>
        </div>
    )
}
