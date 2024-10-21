import { useState } from "react";

function Analisis({ volver }) {
    return <div>
      <header id="main-zonaSuperios">
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
      <div id="analisis-articulos">
        articulos aqui
      </div>
    </div>
  }
  
  export default Analisis;
  