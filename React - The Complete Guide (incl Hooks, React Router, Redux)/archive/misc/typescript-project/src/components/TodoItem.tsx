type itemProp = {
    text: string;
}

export const TodoItem = (props: itemProp) => {
    return <li>{props.text}</li>
}