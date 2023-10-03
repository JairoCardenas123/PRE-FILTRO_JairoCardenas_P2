import './App.css';
import Read from './components/read';
import Update from './components/update';
import Create from './components/create'; // Cambiado el nombre del componente de "create" a "Create"
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className='main'>
        <h2>Trabajo de Manejo de API</h2>
        <div>
          <Route exact path='/create' component={Create}></Route> {/* Ruta corregida */}
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/' component={Read}></Route>
          <Route exact path='/update' component={Update}></Route>
        </div>
      </div>
    </Router>
  );
}
