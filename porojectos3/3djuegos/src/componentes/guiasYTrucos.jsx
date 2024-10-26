import { useState } from "react";

function GuiasYTrucos({ volver }) {
    return (
      <div>
    <header id="main-zonaSuperior">
      <div id="main-logo">
        <div>
          hola
        </div>
      </div>
      <nav id="guias-cabecera">
        <div id="guias-botones">
          <button onClick={volver}>Volver al Main</button>
        </div>
        <h1 id="guias-titulo"> Guias y Trucos </h1>
      </nav>
      <div id="guias-articulosArea">
        <div className="guias-articulo"></div>
      </div> 
    </header>
    <section id="articulos-contenedor">
      <h2>Artículos Destacados</h2>
      <div id="articulos-lista">
        {[
          { title: "Título 1", subtitle: "Subtítulo 1", image: "imagen1.jpg" },
          { title: "Título 2", subtitle: "Subtítulo 2", image: "imagen2.jpg" },
          { title: "Título 3", subtitle: "Subtítulo 3", image: "imagen3.jpg" },
        ].map((articulo, index) => (
          <div key={index} className="articulo">
            <img src={articulo.image} alt={articulo.title} />
            <h3>{articulo.title}</h3>
            <p>{articulo.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
    );
  }
  
  export default GuiasYTrucos;
  