import React from 'react';
import './style.scss';

function Lista(){
    //aqui temos uma array de objetos
    const tarefas = [{
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
    }]

    return(
        <aside className='listaTarefas'>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;