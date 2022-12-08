import React, {ReactNode} from 'react'
import Todo from "../models/todos";
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
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
}

export default Todos