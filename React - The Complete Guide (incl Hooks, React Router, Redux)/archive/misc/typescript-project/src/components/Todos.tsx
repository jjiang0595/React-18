import React, {ReactNode} from 'react'
import Todo from "../models/todos";
import {TodoItem} from "./TodoItem";
import styles from './Todos.module.css'

// const Todos: React.FC<{items: string[]}> = props => {
//     return <ul>
//         {props.}
//     </ul>
// }



const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => {
    return <ul className={styles.list}>
        {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
        ))}
    </ul>
}

export default Todos