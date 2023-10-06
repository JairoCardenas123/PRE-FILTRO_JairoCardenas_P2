import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateInventario() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setFirstName] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [calidad, setCalidad] = useState('');

  const [checkbox, setCheckbox] = useState(false);
  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('Nombre'));
    setCantidad(localStorage.getItem('Cantidad'));
    setProveedor(localStorage.getItem('Proveedor'));
    setCalidad(localStorage.getItem('Calidad'));

},[]);

const updateAPIData = ()=>{
  axios.put(`http://localhost:8001/api/Inventario/${_id}`,
  {
      nombre,
      cantidad,
      proveedor,
      calidad,
      checkbox,
  }
  ).then(()=>{
    history.push('/readInventario');
  })
}

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={nombre} onChange={(e) => setFirstName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Cantidad</label>
          <input placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Proveedor</label>
          <input placeholder="Proveedor" value={proveedor} onChange={(e) => setProveedor(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Calidad</label>
          <input placeholder="Calidad" value={calidad} onChange={(e) => setCalidad(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <Checkbox label="Acepto los términos y condiciones:" checked={checkbox} onChange={() => setCheckbox(!checkbox)} ></Checkbox>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>Actualizar</Button>
      </Form>
    </div>
  );
}
