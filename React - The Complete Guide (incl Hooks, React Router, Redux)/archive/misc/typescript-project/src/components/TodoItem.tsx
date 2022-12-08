import styles from './TodoItem.module.css'
import React from "react";

export const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
    return <li className={styles.item} onClick={props.onRemoveTodo}>{props.text}</li>
}