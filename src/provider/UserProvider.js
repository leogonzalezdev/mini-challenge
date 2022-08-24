import React, { useState, useContext } from "react";

const usersContext = React.createContext();
const setUsersContext = React.createContext();

export const useUsersContext = () => {
  return useContext(usersContext);
}

export const useSetUsersContext = () => {
  return useContext(setUsersContext);
}

const UserProvider = ( { children } ) => {

  const [users, setUsers] = useState([
    {
      nombre: "Pedro",
      edad: 20,
      carrera: "Ingeniería",
      hobbie: "Futbol"
    },
    {
      nombre: "Rodrigo",
      edad: 22,
      carrera: "Arquitectura",
      hobbie: "Bajo eléctrico"
    },
    {
      nombre: "Romina",
      edad: 21,
      carrera: "Abogacía",
      hobbie: "Acrobacia"
    },
    {
      nombre: "Ana",
      edad: 23,
      carrera: "Contadora",
      hobbie: "Astronomía"
    }
  ]);

  return (
    <usersContext.Provider value={users}>
      <setUsersContext.Provider value={setUsers}>
        {children}
      </setUsersContext.Provider>
    </usersContext.Provider>
  )
}

export default UserProvider