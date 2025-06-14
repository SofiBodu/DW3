import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Usuarios</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
