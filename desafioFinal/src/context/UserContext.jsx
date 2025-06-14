import React, {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newUserName, setNewUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const apiURL = "https://684dbab265ed08713916fb77.mockapi.io/user/users"

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then(data => setUsers(data))
            .catch((error) => { console.error("Error al obtener usuarios:", error)})
            .finally(() => {setLoading(false);});
    }, [apiURL]);

    const handleCreateUser=(newUser)=>{
        fetch(apiURL, {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then((response) => response.JSON())
        .then((createdUser) => {
            setUsers([...users, createdUser]);
        })
        .catch((error) => console.error(error.message));
    };

    const handleUpdateUser=(userId, updateData)=>{
        fetch(`${apiURL}/${userId}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(updateData),
        })
        .then(response => response.json())
        .then((updatedUser) => {
            setUsers(users.map(user=> user.id === userId ? updatedUser : user));
            setSelectedUser(null);
        })
        .catch((error) => console.error('error al actualizar usuario:', error));
    
    }

    const handleDeleteUser=(userId)=>{
        fetch(`${apiURL}/${userId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setUsers(users.filter((user) => user.id !== userId));
            setNewUserName('');
            setSelectedUser(null);
        })
        .catch((error) => console.error('error al eliminar usuario:', error));
    }

    return(
        <UserContext.Provider value={{users, loading, setUsers,
            newUserName, setNewUserName, handleCreateUser, handleUpdateUser,
            selectedUser, setSelectedUser, handleDeleteUser}}>
            {children}
        </UserContext.Provider>
    )
}