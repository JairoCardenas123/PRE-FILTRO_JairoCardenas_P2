import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import '../../App.css'
import '../../css/nav.css'
import logo1 from '../../css/logo1.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router";

export default function UpdateEmpresas() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setFirstName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const [checkbox, setCheckbox] = useState(false);
  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('Nombre'));
    setDireccion(localStorage.getItem('Direccion'));
    setTelefono(localStorage.getItem('Telefono'));

},[]);

const updateAPIData = ()=>{
  axios.put(`http://localhost:8001/api/Empresas/${_id}`,
  {
      nombre,
      direccion,
      telefono,
      checkbox,
  }
  ).then(()=>{
    history.push('/readEmpresas');
  })
}

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
          <label>Direccion</label>
          <input placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Telefono</label>
          <input placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <Checkbox label="Acepto los términos y condiciones:" checked={checkbox} onChange={() => setCheckbox(!checkbox)} ></Checkbox>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>Actualizar</Button>
      </Form>
    </div>
  );
}
