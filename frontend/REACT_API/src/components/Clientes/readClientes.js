import axios from 'axios';
import '../../css/nav.css'
import logo1 from '../../css/logo1.png'
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadClientes() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/Clientes`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, apellido,fechaNacimiento ,direccion,celular,empresa,correoElectronico } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Apellido', apellido);
    localStorage.setItem('FechaNacimiento', fechaNacimiento );
    localStorage.setItem('Direccion', direccion);
    localStorage.setItem('Celular', celular);
    localStorage.setItem('Empresa', empresa);
    localStorage.setItem('CorreoElectronico', correoElectronico);
  };

  const getData = () => {
    axios.get(`http://localhost:8001/api/Clientes`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8001/api/Clientes/${_id}`)
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
       <img className='imagen' src={logo1} alt="Descripción de la imagen" />        <a  ><Link className='a' to="/readClientes"> Clientes</Link></a>
        <a  ><Link className='a' to="/readInventario"> Inventario</Link></a>
        <a  ><Link className='a' to="/read"> Empleados</Link></a>
        <a  ><Link className='a' to="/readProyectos"> Proyectos</Link></a>
        <a  ><Link className='a' to="/readEmpresas"> Empresas</Link></a>
        <a  ><Link className='a' to="/readUsuarios"> Usuarios</Link></a>


      </nav>
      <Table className='Table1' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header1' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >Apellido</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >FechaNacimiento</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >Direccion</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >celular</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >Empresa</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >correoElectronico</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header1' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla1' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla1' >{data.apellido}</Table.Cell>
              <Table.Cell className='casilla1' >{data.fechaNacimiento }</Table.Cell>
              <Table.Cell className='casilla1' >{data.direccion}</Table.Cell>
              <Table.Cell className='casilla1' >{data.celular}</Table.Cell>
              <Table.Cell className='casilla1' >{data.empresa}</Table.Cell>
              <Table.Cell className='casilla1' >{data.correoElectronico}</Table.Cell>
              <Table.Cell>
                <Link to="/updateClientes">
                  <Button className='boton1' onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='boton1' onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
