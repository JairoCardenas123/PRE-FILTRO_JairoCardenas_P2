import './App.css';
import fondo from './css/fondo.png'
import ReadClientes from './components/Clientes/readClientes';
import ReadProyectos from './components/readProyectos';
import ReadInventario from './components/readInventario';
import ReadEmpresas from './components/readEmpresas';
import ReadUsuarios from './components/readUsuarios';
import Read from './components/Empleados/read';
import Update from './components/Empleados/update';
import UpdateClientes from './components/Clientes/updateClientes'; // Importa el componente UpdateClientes
import Create from './components/Empleados/create';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'semantic-ui-react';

export default function App() {
  return (
    <Router>
      <div className='main' style={{ 
        backgroundImage: `url(${fondo})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <Link to='/create'>
          <Button>Crear Usuario</Button>
        </Link>
        <div>
          <Route path='/create' component={Create}></Route>
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read}></Route>
          <Route exact path='/readProyectos' component={ReadProyectos}></Route>
          <Route exact path='/readInventario' component={ReadInventario}></Route>
          <Route exact path='/readClientes' component={ReadClientes}></Route>
          <Route exact path='/readEmpresas' component={ReadEmpresas}></Route>
          <Route exact path='/readUsuarios' component={ReadUsuarios}></Route>
          <Route exact path='/' component={Read}></Route>
          <Route exact path='/updateClientes' component={UpdateClientes}></Route> {/* Agrega esta ruta */}
          <Route exact path='/update' component={Update}></Route>
        </div>
      </div>
    </Router>
  );
}
