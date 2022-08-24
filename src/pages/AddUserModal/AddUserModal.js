import React from "react";
import { Modal, Text, Input, Button } from "@nextui-org/react";
import { useSetUsersContext, useUsersContext } from '../../provider/UserProvider';
import { HiOutlineUserAdd } from "react-icons/hi";


const AddUserModal = ({ visible, setVisible }) => {
  const users = useUsersContext();
  const setUsers = useSetUsersContext();

  const [ newUser, setNewUser ] = React.useState({
    nombre: '',
    edad: 0,
    carrera: '',
    hobbie: '',
  });

  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const addUser = () => {
    setUsers([ newUser,...users])
    alert('Añadido correctamente')
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Añade un  
          <Text b size={18}>
          {' '} usuario
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre "
        />
        <Input
          bordered
          fullWidth
          color="primary"
          size="lg"
          type='number'
          name="edad"
          onChange={handleChange}
          placeholder="Edad"
        />
        <Input
          bordered
          fullWidth
          color="primary"
          size="lg"
          name="carrera"
          onChange={handleChange}
          placeholder="Carrera"
        />
        <Input
          bordered
          fullWidth
          color="primary"
          size="lg"
          name="hobbie"
          onChange={handleChange}
          placeholder="Hobbie"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Cancelar
        </Button>
        <Button color='primary' auto onClick={addUser} 
        iconRight={<HiOutlineUserAdd color="white"/>}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddUserModal