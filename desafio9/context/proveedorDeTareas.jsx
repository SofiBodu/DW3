import {createContext} from 'react';

const TareasContext = createContext();

const ProveedorDeTareas = ({children}) => {

    let nombre = 'Usuario';

    return (
        <TareasContext.Provider value={{nombre}}>
            {children}
        </TareasContext.Provider>
    );
}
export { TareasContext, ProveedorDeTareas };