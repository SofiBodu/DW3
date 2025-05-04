import React, { useState } from 'react'

function App() {
  const [tarea , setTarea] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea =()=>{
    if(nuevaTarea.trim() !==''){
      setTarea([... tarea, nuevaTarea]);
      setNuevaTarea('');
    }
  }

  const borrarTarea = (index) =>{
    const actualizarTarea = tarea.filter((_, i) => i !== index);
    setTarea(actualizarTarea);
  }


  return (
    <>
      <div className="container text-center mt-5" style={{maxWidth: '700px'}}>
        <h1>PENDIENTES</h1>

        <div className="input-group mb-3">
          <input type="text" 
                 className="form-control" 
                 placeholder="Agregar nueva tarea" 
                 value={nuevaTarea} 
                 onChange={(e) => setNuevaTarea(e.target.value)}
                 />
          <button 
            className="btn btn-info" 
            type="button"
            id="button-addon2"
            onClick={agregarTarea}>Agregar</button>
        </div>

        <hr className="tect-white" />
        <p>Tareas Pendientes:</p>

        <ul className="list-group">
          {tarea.map((tarea, index) => (
          <li 
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            >

            {tarea}
            <button 
              type="button" 
              className="btn btn-outline-dark" 
              onClick={() => borrarTarea(index)}
            >   
            </button>
          </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
