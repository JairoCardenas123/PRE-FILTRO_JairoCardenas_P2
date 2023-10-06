import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function CreateUsuarios() {
  let history = useHistory();
  const [nombre, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:8001/api/Usuarios`, {
      nombre,
      email,
      password,

    }).then(() => {
        history.push('/readUsuarios');
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
          <label>Email</label>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}
