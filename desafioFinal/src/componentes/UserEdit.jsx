import React,{useEffect, useState, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import { useParams, useNavigate } from 'react-router-dom'

const UserEdit = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState ('')
    const {id} = useParams()
    const navigate = useNavigate()
    const {users, handleUpdateUsers} = useContext(UserContext)
    const userToEdit = users.find((user) => user.id === parseInt(id))

    useEffect(() => {
        const userToEdit = users.find((u) => u.id === id)
        if(userToEdit) {
            setName(userToEdit.name || '');
            setEmail(userToEdit.email || '');
        } 
    }, [id, users]);
   
    const handleUpdate=()=> {
        handleUpdateUser(id, {name, email});
        navigate('/');
    };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <div>
      <label>Nombre:</label>
      <input type="text" 
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder='Ingrese el nombre del usuario'/>
      </div>
      <div>
      <label>Email:</label>
      <input type="text" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder='Ingrese el email del usuario'/>
      </div>
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  )
}

export default UserEdit;
