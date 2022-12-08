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

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos}/>
        </div>
    );
}

export default App;
