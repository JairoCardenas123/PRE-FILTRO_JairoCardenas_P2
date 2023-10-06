import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/footer.css'; // Importa el archivo de estilos CSS para el footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
      </div>
      <div className='redes' >
        <Link to='/' >Facebook</Link>
        <Link to='/' >X</Link>
        <Link to='/' >Instagram</Link>
      </div>
    </footer>
  );
}

export default Footer;
