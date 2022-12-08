import React, {ReactNode} from 'react'

// const Todos: React.FC<{items: string[]}> = props => {
//     return <ul>
//         {props.}
//     </ul>
// }

type TodosProp = {
    items: string[];
    children?: ReactNode;
}
const Todos = (props: TodosProp) => {
    return <ul>
        {props.items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
}

export default Todos