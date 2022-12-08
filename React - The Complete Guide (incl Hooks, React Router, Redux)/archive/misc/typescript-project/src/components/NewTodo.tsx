import React, {useRef} from "react";
export const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            return;
        }
    }


    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}