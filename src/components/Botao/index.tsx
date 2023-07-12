import React from "react";
import style from  './Botao.module.scss';

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
}>{
    //aqui será criado um botão que ele extende de um componente react
    render(){
        //o render é uma função obrigatória
        const { type = "button" } = this.props;
        return(
            //aqui é retornando o HTML, mas dentro dele é executável o JavaScript
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;