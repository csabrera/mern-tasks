import { FORULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types' 

export default (state, action) => {
  switch(action.type){
    case FORULARIO_PROYECTO:
      return {
        ...state,
        formulario : true
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos : action.payload
      }
    default:
      return state;
  }
}