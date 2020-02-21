import React, { useState, Fragment, useContext } from 'react'

import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

  //Obtener el State del formulario
  const proyectosContext = useContext(proyectoContext)

  const { formulario, mostrarFormulario } = proyectosContext

  //Sate para nuevo Proyecto
  const [ proyecto, gurdarProyecto ] = useState({
    nombre : ''
  })

  //DEstructirung
  const { nombre } = proyecto

  //Capturar las volres cuando el usuaio escribe
  const onChangeProyecto = e => {
    gurdarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  //Cuando el usuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    //Validar el proyecto

    //Agregar al State

    //Reiniciar el form
  }

  //Mostrar el formulario
  const onClickFormulario = () => {
    mostrarFormulario()
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick = { onClickFormulario }
      >Nuevo Proyecto</button>

      { formulario ? 
        (
          <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
          >
            <input
              type="text"
              className="input-text"
              placeholder="Nombre del Proyecto"
              name="nombre"
              value={nombre}
              onChange={onChangeProyecto}
            />

            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Agregar Proyecto"
            />
          </form>
        ) : null
      }
    </Fragment>
  );
}
 
export default NuevoProyecto;