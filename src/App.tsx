import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      {/* essa é uma forma de exibir o componente na tela  */}
      <Formulario /> 
      <Lista />
    </div>
  );
}

export default App;
