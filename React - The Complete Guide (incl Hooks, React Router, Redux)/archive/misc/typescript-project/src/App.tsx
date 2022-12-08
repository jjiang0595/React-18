import Todos from "./components/Todos";
import Todo from "./models/todos";
import {NewTodo} from "./components/NewTodo";

function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('Learn Typescript')
    ]

    const addTodoHandler = (todoText: string) => {
        todos.push(todoText)
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos}/>
        </div>
    );
}

export default App;
