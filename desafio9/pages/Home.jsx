import React,{use, useContext} from 'react'
import { TareasContext } from '../context/proveedorDeTareas'

const Home = () => {
    const {nombre} = useContext(TareasContext)

  return (
    <div>
      <h1>Bienvenido a mi web, {nombre}!</h1>
      <p>Esta es la página de inicio de nuestra app.</p>
    </div>
  )
}

export default Home
