import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
  //aqui será criado um formulário que ele extende de um componente react
  render(){
    return (
      <form className={style.novaTarefa}>

        <div className={style.inputContainer}>
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

        <div className={style.inputContainer}>
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

        <Botao>
            Adicionar
        </Botao>
      </form>
    );
  }
}

export default Formulario;
