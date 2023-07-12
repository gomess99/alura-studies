import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
//o pacote css-modules ajuda a não termos problemas de sobreposição de CSS por darmos nomes iguais, pois é aleatório.

function App() {
  return (
    <div className={style.AppStyle}>
      {/* essa é uma forma de exibir o componente na tela  */}
      <Formulario /> 
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
