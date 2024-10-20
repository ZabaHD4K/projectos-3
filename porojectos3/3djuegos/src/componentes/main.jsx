import { useState } from "react";

function Main({irAAnalisis, irAGuias}) {

    return (
    <div>
      <h1>Página Principal</h1>
      <button onClick={irAGuias}>Ir a Guias y Trucos</button>
      <button onClick={irAAnalisis}>Ir a Análisis</button>
    </div>
    );
}

export default Main;