import {useState} from 'react';
import './App.css';
import Analisis from './componentes/analisis';
import GuiasYTrucos from './componentes/guiasYTrucos';
import Main from './componentes/main';

function App() {
  const [pantalla, setPantalla] = useState('main');  // Controla la pantalla actual

  const renderizarPantalla = () => {
    switch (pantalla) {
      case 'main':
        return <Main irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} />;
      case 'guias':
        return <GuiasYTrucos volver={() => setPantalla('main')} />;
      case 'analisis':
        return <Analisis volver={() => setPantalla('main')} />;
      default:
        return <Main irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} />;
    }
  };

  return (
    <div className="App">
      {renderizarPantalla()}
    </div>
  );
}

// comentario
export default App;