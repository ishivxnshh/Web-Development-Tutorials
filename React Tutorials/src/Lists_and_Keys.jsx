import React from "react";

function App() {
    const todos = [{
        title: "Go to Gym",
        done: false
    }, {
        title: "eat food",
        done: true
    }];

    const todosComponents = todos.map((todo, idx) => <Todo title={todo.title} done={todo.done} key={idx}></Todo>)

    return (
        <div>
            {todosComponents}
        </div>
    );
}

function Todo({ title, done }) {
    return <div>
        {title} - {done ? "Done!" : "Not Done!"}
    </div>
}

export default App