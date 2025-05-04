import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
    <>
      <h1>PENDIENTES</h1>
      <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Escriba aquí su tarea" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
      <button className="btn btn-outline-light" type="button" id="button-addon2">Agregar</button>
    </div>

    <hr/>
    <br/>

    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
      Tarea 1
      <span className="badge bg-info rounded-pill">!</span>
      </li>

      <li className="list-group-item d-flex justify-content-between align-items-center">
      Tarea 2
      <span className="badge bg-info rounded-pill">!</span>
      </li>
  </ul>
    </>
  )
}

export default App
