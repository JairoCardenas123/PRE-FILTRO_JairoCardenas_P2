import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import '../../css/nav.css'
import '../../App.css'
import logo1 from '../../css/logo1.png'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export default function CreateInventarios() {
  let history = useHistory();
  const [nombre, setFirstName] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [calidad, setCalidad] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:8001/api/Inventario`, {
      nombre,
      cantidad,
      proveedor,
      calidad

    }).then(() => {
        history.push('/readInventario');
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
          <label>Cantidad</label>
          <input placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Proveedor</label>
          <input placeholder="Proveedor" value={proveedor} onChange={(e) => setProveedor(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Calidad</label>
          <input placeholder="Calidad" value={calidad} onChange={(e) => setCalidad(e.target.value)} ></input>
        </Form.Field>

        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}
