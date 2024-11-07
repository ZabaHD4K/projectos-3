import { useState } from "react";

function guiasYTrucos({ volver }) {
  // Datos de los artículos
  const articulosDestacados = [
    { title: "OMORI: Como contar una historia a través de un estilo artístico", image: "omori.jpg" },
    { title: "Que hace tan especial a Mouthwashing, el nuevo juego de horror surrealista que está arrasando", image: "mouthwashing.jpg" },
    { title: "Journey y la conexión con otras personas", image: "journey.jpg" },
  ];

  const articulosNormales = [
    { title: 'Análisis del tráiler de "Death Note: Killer Within": lo que sabemos hasta ahora', image: "deathnote.jpg" },
    { title: "Hades II: Novedades, similaridades y diferencias respecto a su predecesor", image: "hades2.jpg" },
  ];

  return (
    <div id="return-pagGuias">
      <header id="main-zonaSuperior">
        <div id="main-logo">
        </div>
        <nav id="guias-cabecera">
          <div id="guias-botones" className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>
          <h1 id="guias-titulo"> GUIAS </h1>
        </nav>
        
        {/* Artículos destacados */}
        <section id="guias-articulos-destacados-area">
          <h2 className="seccion-titulo">Artículos Destacados</h2>
          <div id="articulos-destacados-lista">
            {articulosDestacados.map((articulo, index) => (
              <div key={index} className="guias-articulo-destacado">
                <img src={articulo.image} alt={articulo.title} className="guias-art-foto" />
                <h3 className="guias-art-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Resto de artículos */}
        <section id="guias-articulos-area">
          <h2 className="seccion-titulo">Más Artículos</h2>
          <div id="articulos-lista">
            {articulosNormales.map((articulo, index) => (
              <div key={index} className="guias-articulo">
                <img src={articulo.image} alt={articulo.title} className="guias-art-foto" />
                <h3 className="guias-art-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </header>
    </div>
  );
}

export default guiasYTrucos;
