import React from "react";

class Botao extends React.Component{
    //aqui será criado um botão que ele extende de um componente react
    render(): React.ReactNode {
        //o render é uma função obrigatória
        return(
            //aqui é retornando o HTML, mas dentro dele é executável o JavaScript
            <button>
                Botão
            </button>
        )
    }
}

export default Botao;