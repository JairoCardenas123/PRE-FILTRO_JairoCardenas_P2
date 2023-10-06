import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, } from 'semantic-ui-react';
import axios from "axios";
import '../../App.css'
import '../../css/nav.css'
import logo1 from '../../css/logo1.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setFirstName] = useState('');
  const [cargo, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('Nombre'));
    setLastName(localStorage.getItem('Cargo'));

},[]);

const updateAPIData = ()=>{
  axios.put(`http://localhost:8001/api/Empleados/${_id}`,
  {
      nombre,
      cargo,
      checkbox,
  }
  ).then(()=>{
    history.push('/read');
  })
}

  return (
    <div>
      <nav className='nav'>
  <div className='left'>
    <h1>Gestion Empresarial</h1>
    <img className='imagen' src={logo1} alt="Descripción de la imagen" />
  </div>
  <div className='right'>
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
          <input placeholder="Apellido" value={cargo} onChange={(e) => setLastName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <Checkbox label="Acepto los términos y condiciones:" checked={checkbox} onChange={() => setCheckbox(!checkbox)} ></Checkbox>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>ACTUALIZAR</Button>
      </Form>
    </div>
  );
}
