import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function CreateEmpresas() {
  let history = useHistory();
  const [nombre, setFirstName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:8001/api/Empresas`, {
      nombre,
      direccion,
      telefono

    }).then(() => {
        history.push('/readEmpresas');
      })
      .catch((error) => {
        console.error('Error al crear el elemento:', error);
        setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={nombre} onChange={(e) => setFirstName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Direccion</label>
          <input placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Telefono</label>
          <input placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} ></input>
        </Form.Field>

        <Button type="submit" onClick={postData}>Actualizar</Button>
      </Form>
    </div>
  );
}
