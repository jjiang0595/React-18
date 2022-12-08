import React, {useState} from 'react'
import Todo from '../models/todos'

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, addTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)
        addTodos((prevTodos) => {
            return prevTodos.concat(newTodo)
        })
    }

    const removeTodoHandler = (todoId: string) => {
        addTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider
