import React, { useState, useEffect, useContext, use} from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
    const {users, loading, setSelectedUser, handleDeleteUser} = useContext(UserContext);
    
     return (
        <div>
            <h2>Lista de usuarios</h2>
            {loading ?
                (<h1>Cargando...</h1>) : (
                <>
                    <Link to={`/create`}>Crear Usuario</Link>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                            <span>{user.name}</span>
                            <Link to={`/users/${user.id}`}>Ver Detalles</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default UserList;