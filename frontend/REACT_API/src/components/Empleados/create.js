import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  let history = useHistory();
  const [nombre, setFirstName] = useState('');
  const [cargo, setLastName] = useState('');
  const [salario, setSalario] = useState('')
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:8001/api/Empleados`, {
      nombre,
      cargo,
      salario,
      error
    }).then(() => {
        history.push('/read');
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
          <label>Apellido</label>
          <input placeholder="Apellido" value={cargo} onChange={(e) => setLastName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>salario</label>
          <input placeholder="Apellido" value={salario} onChange={(e) => setSalario(e.target.value)} ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}