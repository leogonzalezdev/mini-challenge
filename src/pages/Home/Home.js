import React from 'react'
import { Spacer } from '@nextui-org/react';
import TableUsers from '../../components/TableUsers/TableUsers';
import { useUsersContext } from '../../provider/UserProvider';

const Home = () => {
  const users = useUsersContext();

  const columns = [
    {
      key: "name",
      label: "Nombre",
    },
    {
      key: "age",
      label: "Edad",
    },
    {
      key: "role",
      label: "Carrera",
    },
    {
      key: "hobbie",
      label: "Hobbie",
    },
  ];

  return (
    <>
      <Spacer y={1}/>
      <TableUsers columns={columns} users={users}/>
    </>
  );
}

export default Home