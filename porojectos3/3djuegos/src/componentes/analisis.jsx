import { useState } from "react";

function Analisis({ volver }) {
  return <div id="return-pagAnalisis">
    <header id="main-zonaSuperior">
      <div id="main-logo">
        <div>
          hola
        </div>
      </div>
      <nav id="analisis-cabecera">
        <div id="analisis-botones">
          <button onClick={volver}>Volver al Main</button>
        </div>
        <h1 id="analisis-titulo"> ANÁLISIS </h1>
      </nav>
      <div id="an-articulos-area">
        <div className="analisis-articulo" id="an-art-omori">
          <div className="an-art-foto" id="an-art-foto-omori"/>
          <h1 className="an-art-titulo">OMORI: Como contar una historia a través de un estilo artístico</h1>
        </div>
        <div className="analisis-articulo" id="an-art-journey">
          <div className="an-art-foto" id="an-art-foto-journey"/>
          <h1 className="an-art-titulo">Journey y la conexión con otras personas</h1>
        </div>
      </div>
    </header>
  </div>
  }
  
  export default Analisis;
  