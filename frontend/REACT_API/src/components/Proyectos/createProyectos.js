import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function CreateProyectos() {
  let history = useHistory();
  const [nombre, setFirstName] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinalizacion, setFinalizacion] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:8001/api/Proyectos`, {
      nombre,
      descripcion,
      fechaInicio,
      fechaFinalizacion,

    }).then(() => {
        history.push('/readProyectos');
      })
      .catch((error) => {
        console.error('Error al crear el elemento:', error);
        setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div>
 <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={nombre} onChange={(e) => setFirstName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>FechaInicio</label>
          <input placeholder="FechaInicio" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>FechaFinalizacion</label>
          <input placeholder="FechaFinalizacion" value={fechaFinalizacion} onChange={(e) => setFinalizacion(e.target.value)} ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}
