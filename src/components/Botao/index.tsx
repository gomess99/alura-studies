import React from "react";
import style from  './Botao.module.scss';

class Botao extends React.Component{
    //aqui será criado um botão que ele extende de um componente react
    render(){
        //o render é uma função obrigatória
        return(
            //aqui é retornando o HTML, mas dentro dele é executável o JavaScript
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;