import React from 'react'

import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyecto from '../proyectos/ListadoProyectos'

const sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>

      <NuevoProyecto />

      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ListadoProyecto />
      </div>
    </aside>
  );
}
 
export default sidebar;