import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefa';

function Lista( {tarefas }: {tarefas: ITarefa[]}){


    return(
        <aside className={style.listaTarefa}>
            <h2>Estudos do Dia</h2>
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