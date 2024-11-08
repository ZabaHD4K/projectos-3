
import React from 'react';
import mainBanner from '../recursos/main-baner1.jpg';
import TheOregonTrail from '../recursos/42zardfyztqd1.jpeg';
import rey from '../recursos/rajoy.jpeg';
import trump from '../recursos/animetrump-raises-fist-after-shooting.jpg';
import '../App.css';

function Series({ volver }) {
  const articulos = [
    {
      titulo: '...',
      descripcion: 'Ahora yo...',
      categoria: 'Series de moda',
      fecha: 'Hace 1 hora',
      autor: 'Álvaro Pérez',
      comentarios: '3 comentarios',
      imagen: TheOregonTrail,
    },
    {
      titulo: 'The Walking Dead: Daryl Dixon',
      descripcion: 'Nueva Serie',
      categoria: 'Series',
      fecha: 'Hace 3 horas',
      autor: 'Álvaro Pérez',
      comentarios: '5 comentarios',
      imagen: rey,
    },
    {
      titulo: 'Nuevo anime de donald trump en producción',
      descripcion: 'La serie constara de donald trump.',
      categoria: 'Series a estrenarse',
      fecha: 'Hace 6 horas',
      autor: 'Álvaro Pérez',
      comentarios: '8 comentarios',
      imagen: trump,
    },
  ];

  return (
    <div className="App">
      <header id="main-zonaSuperior">
        <div id="main-logo" style={{ backgroundImage: `url(${mainBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div>Cine-TV</div>
        </div>
      </header>

      <nav id="main-paginas" className="botones">
        <button onClick={volver}>Volver al Main</button>
      </nav>

      <div className="series-articulos">
        {articulos.map((articulo, index) => (
          <div key={index} className="series-articulo">
            <div
              className="series-articulo-imagen"
              style={{ backgroundImage: `url(${articulo.imagen})` }}
            ></div>
            <div className="series-articulo-texto">
              <h2>{articulo.titulo}</h2>
              <p>{articulo.descripcion}</p>
              <span className="categoria">{articulo.categoria}</span>
              <div className="detalles">
                <span>{articulo.fecha}</span> - <span>{articulo.autor}</span> - <span>{articulo.comentarios}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;
