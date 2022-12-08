import React, {ReactNode} from 'react'
import Todo from "../models/todos";
import {TodoItem} from "./TodoItem";
// const Todos: React.FC<{items: string[]}> = props => {
//     return <ul>
//         {props.}
//     </ul>
// }

type TodosProp = {
    items: Todo[];
    children?: ReactNode;
}
const Todos = (props: TodosProp) => {
    return <ul>
        {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} />
        ))}
    </ul>
}

export default Todos