import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CompanyInfoCarousel from './components/Home';
import ReadClientes from './components/Clientes/readClientes';
import UpdateClientes from './components/Clientes/updateClientes';
import createClientes from './components/Clientes/createClientes';
import ReadProyectos from './components/Proyectos/readProyectos';
import UpdateProyectos from './components/Proyectos/updateProyectos';
import CreateProyectos from './components/Proyectos/createProyectos';
import ReadInventario from './components/Inventarios/readInventario';
import UpdateInventario from './components/Inventarios/updateInventario';
import CreateInventarios from './components/Inventarios/createInventario';
import ReadEmpresas from './components/Empresas/readEmpresas';
import UpdateEmpresas from './components/Empresas/updateEmpresas';
import CreateEmpresas from './components/Empresas/createEmpresas';
import ReadUsuarios from './components/Usuarios/readUsuarios';
import UpdateUsuarios from './components/Usuarios/updateUsuarios';
import CreateUsuarios from './components/Usuarios/createUsuarios';
import Read from './components/Empleados/read';
import Update from './components/Empleados/update';
import Create from './components/Empleados/create';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Footer from './components/footer';

export default function App() {
  return (
    <Router>
      <div className='main'>
        {/* Redirigir la ruta '/' a '/home' para que el componente CompanyInfoCarousel se muestre en la página de inicio */}
        <Redirect from="/" to="/home" />

        <Route path='/home' component={CompanyInfoCarousel}></Route>

        {/* Resto de las rutas */}
        <Route path='/createClientes' component={createClientes}></Route>
        <Route path='/createEmpresas' component={CreateEmpresas}></Route>
        <Route path='/createInventarios' component={CreateInventarios}></Route>
        <Route path='/createProyectos' component={CreateProyectos}></Route>
        <Route path='/createUsuarios' component={CreateUsuarios}></Route>

        <Route exact path='/read' component={Read}></Route>
        <Route exact path='/update' component={Update}></Route>
        <Route path='/create' component={Create}></Route>



        <Route exact path='/readProyectos' component={ReadProyectos}></Route>
        <Route exact path='/updateProyectos' component={UpdateProyectos}></Route>
        <Route exact path='/readInventario' component={ReadInventario}></Route>
        <Route exact path='/updateInventarios' component={UpdateInventario}></Route>
        <Route exact path='/readClientes' component={ReadClientes}></Route>
        <Route exact path='/updateClientes' component={UpdateClientes}></Route>

        <Route exact path='/readEmpresas' component={ReadEmpresas}></Route>
        <Route exact path='/updateEmpresas' component={UpdateEmpresas}></Route>
        <Route exact path='/readUsuarios' component={ReadUsuarios}></Route>
        <Route exact path='/updateUsuarios' component={UpdateUsuarios}></Route>
        
        <div className='botones'>
          
          <Link to='/create'>
            <Button className='Create'>Crear Empleado</Button>
          </Link>
          <Link to='createClientes'>
            <Button className='Create'>Crear Cliente</Button>
          </Link>
          <Link to='createEmpresas'>
            <Button className='Create'>Crear Empresa</Button>
          </Link>
          <Link to='createInventarios'>
            <Button className='Create'>Crear Inventario</Button>
          </Link>
          <Link to='createProyectos'>
            <Button className='Create'>Crear Proyecto</Button>
          </Link>
          <Link to='createUsuarios'>
            <Button className='Create'>Crear Usuarios</Button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </Router>
  );
}
