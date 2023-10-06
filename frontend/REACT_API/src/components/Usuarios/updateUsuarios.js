import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateUsuarios() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checkbox, setCheckbox] = useState(false);
  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('Nombre'));
    setEmail(localStorage.getItem('Email'));
    setPassword(localStorage.getItem('Password'));

},[]);

const updateAPIData = ()=>{
  axios.put(`http://localhost:8001/api/Usuarios/${_id}`,
  {
      nombre,
      email,
      password,
      checkbox,
  }
  ).then(()=>{
    history.push('/readUsuarios');
  })
}

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
        <Form.Field>
          <Checkbox label="Acepto los términos y condiciones:" checked={checkbox} onChange={() => setCheckbox(!checkbox)} ></Checkbox>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>Actualizar</Button>
      </Form>
    </div>
  );
}
