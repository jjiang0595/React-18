import Todos from "./components/Todos";
import Todo from "./models/todos";
import {NewTodo} from "./components/NewTodo";
import {useState} from 'react'

function App() {
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

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos onRemoveTodo={removeTodoHandler} items={todos}/>
        </div>
    );
}

export default App;
