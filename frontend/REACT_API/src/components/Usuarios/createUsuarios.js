import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import '../../css/nav.css'
import '../../App.css'
import logo1 from '../../css/logo1.png'
import { Link } from 'react-router-dom';
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
      <nav className='nav'>
  <div className='tituloImagen' >
  <img className='imagen' src={logo1} alt="Descripción de la imagen" />
  <h1>Gestion Empresarial</h1>
  </div>

  <div className='right'>
  <Link className='a' to="/home">home</Link>

    <Link className='a' to="/readClientes">Clientes</Link>
    <Link className='a' to="/readInventario">Inventario</Link>
    <Link className='a' to="/read">Empleados</Link>
    <Link className='a' to="/readProyectos">Proyectos</Link>
    <Link className='a' to="/readEmpresas">Empresas</Link>
    <Link className='a' to="/readUsuarios">Usuarios</Link>
  </div>
</nav>
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
