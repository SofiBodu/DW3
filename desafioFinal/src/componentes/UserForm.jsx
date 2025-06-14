import React, {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState ('');
    const {handleCreateUser} = useContext(UserContext)

    const handleSubmit = () => {
        const newUser = {name, email};
        handleCreateUser(newUser);
        setName('');
        setEmail('');
    };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <div>
        <label>Nombre:</label>
        <input type="text" 
               value={name}
               onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <button onClick={handleSubmit}>Crear Usuario</button>
    </div>
  )
}

export default UserForm;
