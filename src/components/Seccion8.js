import React, { useState } from 'react'
import { useForm } from '../Hooks/useForm'

export const Seccion8 = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        mensaje: '',
    });

    const { name, email, mensaje } = formValues;

    const [error, seterror] = useState({
        nameError: '',
        mensajeError: '',
        emailError: ''
    })

    const isFormValid = () => {

        const regEx = /[a-zA-Z0-9!#$%&'*/=?^_`{|}~+-]+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|\d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?/g
        // const regEx = /[a-zA-Z0-9!#$%&'*\/=?^_`{|}~+-]([\.]?[a-zA-Z0-9!#$%&'*\/=?^_`{|}~+-])+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/g

        if (name.trim().length === 0) {
            seterror({
                ...error,
                nameError: 'name is required'
            });
            return false
        };

        if (mensaje.trim().length === 0) {
            seterror({
                ...error,
                mensajeError: 'mensaje is required'
            });
            return false
        }

        if (email.trim().length === 0 || !regEx.test(email)) {
            seterror({
                ...error,
                emailError: 'email is empty or wrong'
            });
            return false
        }

        if (error.nameError || error.mensajeError || error.emailError) {
            seterror({
                ...error,
                nameError: '',
                mensajeError: '',
                emailError: ''
            })
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
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
                            className='control-formulario'
                            placeholder='Enter your Name'
                            autoComplete='off'
                            value={name}
                            onChange={handleInputChange}
                        />
                        <div className='errorMessage'>{error.nameError}</div>

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
                        <div className='errorMessage'>{error.emailError}</div>

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
