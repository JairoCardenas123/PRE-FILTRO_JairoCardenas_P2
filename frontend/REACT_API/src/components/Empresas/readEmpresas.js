import axios from 'axios';
import '../../css/nav.css'
import '../../App.css'
import logo1 from '../../css/logo1.png'

import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadEmpresas() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/Empresas`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, direccion,telefono } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Apellido', direccion);
    localStorage.setItem('telefono', telefono);
  };

  const getData = () => {
    axios.get(`http://localhost:8001/api/Empresas`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8001/api/Empresas/${_id}`).then(() => {
      getData();
    }).catch((error) => {
      console.error('Error al eliminar el elemento:', error);
    });;
  };

  return (
    <div>
<nav className='nav'>
  <div className='tituloImagen' >
  <img className='imagen' src={logo1} alt="Descripción de la imagen" />
  <h1>Gestion Empresarial</h1>
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
<h1 className='titulo' >Empresas</h1>

      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Direccion</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Telefono</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla' >{data.direccion}</Table.Cell>
              <Table.Cell className='casilla' >{data.telefono}</Table.Cell>
              <Table.Cell>
                <Link to="/updateEmpresas">
                  <Button className='CreateUpdate' onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='CreateDelete' onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
