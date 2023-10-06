import axios from 'axios';
import '../../css/nav.css'
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
      <nav className='nav' >
      <h1>Gestion Empresarial</h1>
      <a  ><Link className='a' to="/readClientes"> Clientes</Link></a>
        <a  ><Link className='a' to="/readInventario"> Inventario</Link></a>
        <a  ><Link className='a' to="/read"> Empleados</Link></a>
        <a  ><Link className='a' to="/readProyectos"> Proyectos</Link></a>
        <a  ><Link className='a' to="/readEmpresas"> Empresas</Link></a>
        <a  ><Link className='a' to="/readUsuarios"> Usuarios</Link></a>

      </nav>
      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header2' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Direccion</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Telefono</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla2' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla2' >{data.direccion}</Table.Cell>
              <Table.Cell className='casilla2' >{data.telefono}</Table.Cell>
              <Table.Cell>
                <Link to="/updateEmpresas">
                  <Button className='boton2' onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='boton2' onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
