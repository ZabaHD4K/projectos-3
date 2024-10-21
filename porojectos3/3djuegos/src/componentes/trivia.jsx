import { useState } from "react";

function Trivia({ volver }) {
    return (
      <div>
        <h1>Trivia</h1>
        <button onClick={volver}>Volver al Main</button>
      </div>
    );
  }
  
  export default Trivia;
  