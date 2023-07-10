import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  //aqui será criado um formulário que ele extende de um componente react
  render(): React.ReactNode {
    return (
      <form>

        <div>
          <label htmlFor="tarefa">
            Adiciona um novo estudo
          </label>
          <input
           type="text"
           name="tarefa"
           id="tarefa"
           placeholder="O que você quer estudar"
           required
           />
        </div>

        <div>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
           type="time"
           step="1"
           name="tempo"
           id="tempo"
           min="00:00:00"
           max="01:30:00"
           required
           />
        </div>

        <Botao />
      </form>
    );
  }
}

export default Formulario;