import { useState } from "react";

function Analisis({ volver }) {
  return <div>
    <header id="main-zonaSuperios">
      <div id="main-logo">
        <div>
          hola
        </div>
      </div>
      <nav id="analisis-cabecera">
        <div id="analisis-botones">
          <button onClick={volver}>Volver al Main</button>
        </div>
        <h1 id="analisis-titulo"> Análisis </h1>
      </nav>
      <div id="analisis-articulosArea">
        <div className="analisis-articulo"></div>
      </div> 
    </header>
  </div>
      {/* <header id="main-zonaSuperios">
        <div id="main-logo">
          <div>
            hola
          </div>
        </div>
      </header>
      <div id="analisis-navbar">
        <button onClick={volver}>Volver al Main</button>
      </div>
      <h1 id="analisis-title">Análisis</h1>
      */}
    
  }
  
  export default Analisis;
  