import axios from 'axios';
import '../css/nav.css'
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
    let { _id, nombre, cantidad, proveedor,calidad,checkbox } = data;
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
    axios.get(`http://localhost:8001/api/Inventario/${_id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <nav className='nav' >
      <h1>Gestion Empresarial</h1>
      <a  ><Link className='a' to="/readClientes">Clientes</Link></a>
        <a  ><Link className='a' to="/readInventario">Inventario</Link></a>
        <a  ><Link className='a' to="/read">Empleados</Link></a>
        <a  ><Link className='a' to="/readProyectos">Proyectos</Link></a>
        <a  ><Link className='a' to="/readEmpresas">Empresas</Link></a>
        <a  ><Link className='a' to="/readUsuarios">Usuarios</Link></a>

      </nav>
      <Table className='Table3' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header2' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Cantidad</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Proveedor</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Calidad</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header2' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla2' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla2' >{data.cantidad}</Table.Cell>
              <Table.Cell className='casilla2' >{data.proveedor}</Table.Cell>
              <Table.Cell className='casilla2' >{data.calidad}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
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
