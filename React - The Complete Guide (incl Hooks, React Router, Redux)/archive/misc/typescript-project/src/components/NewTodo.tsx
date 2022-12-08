import React, {useRef} from "react";
export const NewTodo = () => {
    const todoTextInputRef = useRef();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()


    }


    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}