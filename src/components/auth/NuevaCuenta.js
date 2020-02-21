import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const NuevaCuenta = () => {
    //State para Nueva Cuenta
    const [usuario, guardarUsuario] = useState({
      nombre : '',
      email : '',
      password : '',
      confirmar : ''
    })
  
    //Extraer del usuario
    const { nombre, email, password, confirmar } = usuario
  
    const onChange = e => {
      guardarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
      })
    }
  
    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
      e.preventDefault()
      
      //Validar que no haya campos vacios

      //Password minimo de 6 caracteres

      //Los dos password sean iguales
  
      //pasarlo al action
    }
  
    return(
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Obtener una cuenta</h1>
  
          <form
            onSubmit={onSubmit}
          >
            <div className="campo-form">
              <label htmlFor="nombre">Tombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                placeholder="Tu nombre"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Tu email"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Tu password"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="confirmar">Confirmar confirmar</label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                value={confirmar}
                placeholder="Tu confirmar"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Nuevo Registro"
              />
            </div>
          </form>
          <Link
            to="/"
            className="enlace-cuenta">
          Volver a Iniciar Sesión</Link>
        </div>
      </div>
    )
}

export default NuevaCuenta