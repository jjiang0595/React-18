import React, {useRef, useContext} from "react";
import styles from './NewTodo.module.css'
import {TodosContext} from "../store/todos-context";

export const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText)
    }


    return <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}