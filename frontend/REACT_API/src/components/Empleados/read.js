import axios from 'axios';
import '../../css/nav.css'
import logo1 from '../../css/logo1.png'

import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8001/api/Empleados`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, cargo,salario } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Apellido', cargo);
    localStorage.setItem('Salario', salario );
  };

  const getData = () => {
    axios.get(`http://localhost:8001/api/Empleados`).then((getData) => {
      setAPIData(getData.data);
    });
  };
  const onDelete = (_id) => {
    axios.delete(`http://localhost:8001/api/Empleados/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  return (
    <div>
      <nav className='nav' >
        <h1>Gestion Empresarial</h1>
        <img className='imagen' src={logo1} alt="Descripción de la imagen" />        

      <a><Link className='a' to="/readClientes">Clientes</Link></a>
        <a><Link className='a' to="/readInventario">Inventario</Link></a>
        <a><Link className='a' to="/read">Empleados</Link></a>
        <a><Link className='a' to="/readProyectos">Proyectos</Link></a>
        <a><Link className='a' to="/readEmpresas">Empresas</Link></a>
        <a><Link className='a' to="/readUsuarios">Usuarios</Link></a>


      </nav>
      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Apellido</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >salario</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla' >{data.cargo}</Table.Cell>
              <Table.Cell className='casilla' >{data.salario}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button className='boton' onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='boton' onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
