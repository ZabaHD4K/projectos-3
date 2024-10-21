import { useState } from "react";

function Main({ irAAnalisis, irAGuias, irATrivia, irASeries }) {

    return (
      <header id="main-zonaSuperios">
      
      <div id="main-logo">
        <div>
          hola
        </div>
      </div>

      <nav id="main-paginas">
        <div id="main-botones">
        <button onClick={irAGuias}>Ir a Guias y Trucos</button>
        <button onClick={irAAnalisis}>Ir a Análisis</button>
        <button onClick={irATrivia}>Ir a Trivia</button>
        <button onClick={irASeries}>Ir a Series</button>
        </div>
      </nav>

      
      <div id="noticias-destacadas">
        <h1 id="main-noticiaDestacada1">Los nuevos misiles de curcero que pueden cambiar la guerra para siempre</h1>
        <h1 id="main-noticiaDestacada2">La nueva serie 5000 de nvidia puede estar mucho mas cerca de lo que parece</h1>
      </div>
      </header>
    );
}

export default Main;