import React, {use, useContext} from 'react'
import { TareasContext } from '../context/proveedorDeTareas'

const About = () => {
    const {nombre} = useContext(TareasContext)

  return (
    <div>
      <h1>Sobre Nosotros</h1>
        <p>Acá vas a encontrar toda la información sobre nuestra app.</p>
        <p>Desarrollado por {nombre}</p>
    </div>
  )
}

export default About
