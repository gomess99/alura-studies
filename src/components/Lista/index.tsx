import React, { useState } from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista(){
    //aqui temos uma array de objetos
    const [tarefas, setTarefas] = useState([{
        //primeiro objeto
        tarefa: 'React',
        tempo: '02:00:00',
    },{
        //segundo objeto
       tarefa: 'JavaScript',
       tempo: '01:00:00' 
    },{
        //terceiro objeto
       tarefa: 'TypeScript',
       tempo: '01:30:00'
    }]);

    return(
        <aside className={style.listaTarefa}>
            <h2 onClick={() =>{
                setTarefas ([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00"}])
            }}>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                   <Item
                        key={index}
                        {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;