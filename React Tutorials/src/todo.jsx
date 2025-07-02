import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([{
        title: "Learn React",
        description: "Learn the basics of React",
        done: false
    }]);

    function addTodo() {
        setTodos([
            ...todos,
            {
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                done: false
            }
        ]);
    }

    return <div>
        <input id="title" type="text" placeholder="Title" />
        <input id="description" type="text" placeholder="Description" />
        <br />
        <button onClick={addTodo}>Add a todo</button>
        <br />
        {todos.map((todo) => (
            <Todo
                title={todo.title}
                description={todo.description}
                done={todo.done}
            />
        ))}
    </div>

    function Todo(props) {
        return <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <h1>{props.done ? "Task is done" : "Task is not done"}</h1>
        </div>
    }
}