import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import '../../App.css'
import '../../css/nav.css'
import logo1 from '../../css/logo1.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router";

export default function UpdateClientes() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setFirstName] = useState('');
  const [apellido, setLastName] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('Nombre'));
    setLastName(localStorage.getItem('Apelllido'));
    setFechaNacimiento(localStorage.getItem('FechaNacimiento'));
    setDireccion(localStorage.getItem('Direccion'));
    setCelular(localStorage.getItem('Celular'));
    setCorreoElectronico(localStorage.getItem('CorreoElectronico'));
    setEmpresa(localStorage.getItem('Empresa'));

},[]);

const updateAPIData = ()=>{
  axios.put(`http://localhost:8001/api/Clientes/${_id}`,
  {
      nombre,
      apellido,
      fechaNacimiento,
      direccion,
      celular,
      correoElectronico,
      empresa,
      checkbox,
  }
  ).then(()=>{
    history.push('/readClientes');
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
    <input
      placeholder="Nombre"
      value={nombre}
      onChange={(e) => setFirstName(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <label>Apellido</label>
    <input
      placeholder="Apellido"
      value={apellido}
      onChange={(e) => setLastName(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <label>fechaNacimiento</label>
    <input
      placeholder="FechaNacimiento"
      value={fechaNacimiento}
      onChange={(e) => setFechaNacimiento(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <label>Direccion</label>
    <input
      placeholder="Direccion"
      value={direccion}
      onChange={(e) => setDireccion(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <label>Celular</label>
    <input
      placeholder="Celular"
      value={celular}
      onChange={(e) => setCelular(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <label>Correo Electronico</label>
    <input
      placeholder="CorreoElectronico"
      value={correoElectronico}
      onChange={(e) => setCorreoElectronico(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <label>Empresa</label>
    <input
      placeholder="Empresa"
      value={empresa}
      onChange={(e) => setEmpresa(e.target.value)}
    ></input>
  </Form.Field>
  <Form.Field>
    <Checkbox
      label="Acepto los términos y condiciones:"
      checked={checkbox}
      onChange={() => setCheckbox(!checkbox)}
    ></Checkbox>
  </Form.Field>
  <Button type="submit" onClick={updateAPIData}>
    Actualizar
  </Button>
</Form>
    </div>
  );
}
