import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserList from './componentes/UserList'
import UserForm from './componentes/UserForm'
import UserDetails from './componentes/UserDetails'
import UserEdit from './componentes/UserEdit'
import UserDelete from './componentes/UserDelete'
import Navbar from './componentes/Navbar'
import './App.css'

const App = () => {
  return (
      <Router>
        <Navbar/>
        <h1>Gestión de Usuarios</h1>
        <p>Aplicación para gestionar usuarios</p>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          <Route path='/users/:id' element={<UserDetails/>}/>
          <Route path='/create' element={<UserForm/>}/>
          <Route path='/edit/:id' element={<UserEdit/>}/>
          <Route path='/delete/:id' element={<UserDelete/>}/>
        </Routes>
      </Router>
  );
};

export default App;
