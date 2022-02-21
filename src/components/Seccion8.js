import React from 'react'
import { useForm } from '../Hooks/useForm'

export const Seccion8 = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        mensaje: ''
    });

    const { name, email, mensaje } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <div className='contenedor-principal-seccion8'>

            <div className='contenedor-titulo'>
                <h1>Send Your Request</h1>
            </div>

            <div className='contenedor-formulario'>
                <form onSubmit={handleSubmit}>
                    <div className='formulario'>
                        <input
                            type='text'
                            name='name'
                            className='control-formulario'
                            placeholder='Enter your Name'
                            autoComplete='off'
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='formulario'>
                        <input
                            type='text'
                            name='email'
                            className='control-formulario'
                            placeholder='Enter your Email'
                            autoComplete='off'
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='formulario'>
                        <textarea
                            type='text'
                            name='mensaje'
                            className='message-textarea'
                            placeholder='Enter your Message'
                            autoComplete='off'
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type='submit' className='boton-submit-sec8'>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}
