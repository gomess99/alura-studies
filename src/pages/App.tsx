import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro";
import { ITarefa } from "../types/tarefa";
//o pacote css-modules ajuda a não termos problemas de sobreposição de CSS por darmos nomes iguais, pois é aleatório.

function App() {
  //aqui temos uma array de objetos
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      {/* essa é uma forma de exibir o componente na tela  */}
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
