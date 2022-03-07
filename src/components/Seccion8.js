import React, { useState } from 'react'
import { useForm } from '../Hooks/useForm'

export const Seccion8 = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        mensaje: '',
    });

    const { name, email, mensaje } = formValues;

    const [error, setError] = useState({
        nameError: '',
        mensajeError: '',
        emailError: ''
    })

    const regEx = /[a-zA-Z0-9!#$%&'*/=?^_`{|}~+-]+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|\d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?/g

    const handleSubmit = (e) => {
        e.preventDefault();
        let errores = {
            nameError: '',
            mensajeError: '',
            emailError: ''
        }

        if (name.trim().length === 0) {
            errores.nameError = 'name is required'
        } else {
            errores.nameError = ''
        }

        if (mensaje.trim().length === 0) {
            errores.mensajeError = 'mensaje is required'
        } else {
            errores.mensajeError = ''
        }

        if (email.trim().length === 0 || !regEx.test(email)) {
            errores.emailError = 'email is empty or wrong'
        } else {
            errores.emailError = ''
        }

        setError(errores)

        if (errores.emailError === '' && errores.mensajeError === '' && errores.nameError === '') {
            console.log(formValues)
            reset();
        }
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
                            className={error.nameError === 'name is required' ? 'error-control-formulario' : 'control-formulario'}
                            placeholder='Enter your Name'
                            autoComplete='off'
                            value={name}
                            onChange={handleInputChange}
                        />
                        <div className='errorMessage'>{error.nameError}</div>

                    </div>
                    <div className='formulario'>
                        <input
                            type='email'
                            name='email'
                            className={error.emailError === 'email is empty or wrong' ? 'error-control-formulario' : 'control-formulario'}
                            placeholder='Enter your Email'
                            autoComplete='off'
                            value={email}
                            onChange={handleInputChange}
                        />
                        <div className='errorMessage'>{error.emailError}</div>

                    </div>
                    <div className='formulario'>
                        <textarea
                            type='text'
                            name='mensaje'
                            className={error.mensajeError === 'mensaje is required' ? 'error-message-textarea' : 'message-textarea'}
                            placeholder='Enter your Message'
                            autoComplete='off'
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                        <div className='errorMessage'>{error.mensajeError}</div>
                    </div>

                    <button type='submit' className='boton-submit-sec8'>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}
