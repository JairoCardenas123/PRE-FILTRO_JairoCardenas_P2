import React from 'react';
import Slider from 'react-slick';
import '../css/nav.css'
import '../App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo1 from '../css/logo1.png'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Datos de ejemplo de la empresa
const companyInfo = [
  {
    title: 'Quiénes somos',
    description: 'Somos una empresa con una rica historia de innovación y compromiso con la excelencia. Desde nuestros inicios, hemos estado impulsando la industria con nuestra visión y creatividad. Nuestra misión es superar las expectativas de nuestros clientes, brindando soluciones de alta calidad y marcando la diferencia en la vida de las personas en todo el mundo. Valoramos la integridad, la colaboración y la excelencia en todo lo que hacemos.',
    backgroundImage: '../'
  },
  {
    title: 'Nuestra misión',
    description: 'Nuestra misión es proporcionar soluciones excepcionales a nuestros clientes. Trabajamos incansablemente para ofrecer productos y servicios de la más alta calidad, impulsados por la innovación y la dedicación a la excelencia. Creemos que cada desafío es una oportunidad para crecer y mejorar, y estamos comprometidos con el progreso continuo en todo lo que emprendemos.',
  },
  {
    title: 'Nuestros valores',
    description: 'En nuestra empresa, nuestros valores son el núcleo de todo lo que hacemos. Valoramos la integridad en cada interacción, la excelencia en cada proyecto y la colaboración en cada equipo. Nuestra dedicación a estos valores nos impulsa a ofrecer resultados excepcionales y a construir relaciones duraderas con nuestros clientes y socios comerciales. Estamos orgullosos de ser una empresa que se destaca por su compromiso con la integridad, la excelencia y la colaboración.',
  },
];

const CompanyInfoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="company-info-carousel">
      <nav className='nav'>
  <div className='tituloImagen' >
  <img className='imagen' src={logo1} alt="Descripción de la imagen" />
  <h1>Gestion Empresarial</h1>
  </div>

  <div className='right'>   
    <Link className='a' to="/home">home</Link>
    <Link className='a' to="/readClientes">Clientes</Link>
    <Link className='a' to="/readInventario">Inventario</Link>
    <Link className='a' to="/read">Empleados</Link>
    <Link className='a' to="/readProyectos">Proyectos</Link>
    <Link className='a' to="/readEmpresas">Empresas</Link>
    <Link className='a' to="/readUsuarios">Usuarios</Link>
  </div>
</nav>
<div className='carrusel' > 
<Slider {...settings}>
        {companyInfo.map((info, index) => (
          <div className='info'  key={index}>
            <h2>{info.title}</h2>
            <p className='p' >{info.description}</p>
          </div>
        ))}
      </Slider>
</div>

    </div>
  );
};

export default CompanyInfoCarousel;
