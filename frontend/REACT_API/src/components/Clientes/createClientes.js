import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import '../../css/nav.css'
import '../../App.css'
import logo1 from '../../css/logo1.png'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export default function CreateClientes() {
  let history = useHistory();
  const [nombre, setFirstName] = useState('');
  const [apellido, setLastName] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [empresa, setEmpresa] = useState('');

  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:8001/api/Clientes`, {
      nombre,
      apellido,
      fechaNacimiento,
      direccion,
      celular,
      correoElectronico,
      empresa,
      error
    }).then(() => {
        history.push('/readClientes');
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
          <label>Apellido</label>
          <input placeholder="Apellido" value={apellido} onChange={(e) => setLastName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>fechaNacimiento</label>
          <input placeholder="FechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Direccion</label>
          <input placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Celular</label>
          <input placeholder="Celular" value={celular} onChange={(e) => setCelular(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Correo Electronico</label>
          <input placeholder="CorreoElectronico" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Empresa</label>
          <input placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}
