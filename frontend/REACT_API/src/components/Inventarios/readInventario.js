import axios from 'axios';
import '../../css/nav.css'
import '../../App.css'
import logo1 from '../../css/logo1.png'

import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadInventario() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/Inventario`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, cantidad, proveedor,calidad } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Apellido', cantidad);
    localStorage.setItem('proveedor', proveedor);
    localStorage.setItem('calidad', calidad);
  };

  const getData = () => {
    axios.get(`http://localhost:8001/api/Inventario`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8001/api/Inventario/${_id}`).then(() => {
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
<h1 className='titulo' >Inventario</h1>

      <Table className='Table3' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Cantidad</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Proveedor</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Calidad</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla' >{data.cantidad}</Table.Cell>
              <Table.Cell className='casilla' >{data.proveedor}</Table.Cell>
              <Table.Cell className='casilla' >{data.calidad}</Table.Cell>
              <Table.Cell>
                <Link to="/updateInventarios">
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
