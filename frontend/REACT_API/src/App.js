
import './App.css';
import fondo from './css/fondo.png'
import ReadClientes from './components/readClientes';
import ReadProyectos from './components/readProyectos';
import ReadInventario from './components/readInventario';
import ReadEmpresas from './components/readEmpresas';
import ReadUsuarios from './components/readUsuarios';
import Read from './components/read';
import Update from './components/update';
import Create from './components/create'; // Cambiado el nombre del componente de "create" a "Create"
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className='main' style={{ 
        backgroundImage: `url(${fondo})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir el contenedor
        backgroundPosition: 'center center' // Centra la imagen en el contenedor
      }}>
        <img src='' ></img>
        <div>
          <Route exact path='/create' component={Create}></Route> {/* Ruta corregida */}
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read}></Route>
          <Route exact path='/readProyectos' component={ReadProyectos}></Route>
          <Route exact path='/readInventario' component={ReadInventario}></Route>
          <Route exact path='/readClientes' component={ReadClientes}></Route>
          <Route exact path='/readEmpresas' component={ReadEmpresas}></Route>
          <Route exact path='/readUsuarios' component={ReadUsuarios}></Route>
          <Route exact path='/' component={Read}></Route>
          <Route exact path='/update' component={Update}></Route>
        </div>
      </div>
    </Router>
  );
}
