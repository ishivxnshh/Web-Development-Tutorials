import React from "react";

const App = () => {

    return (
        <div>
            <MyComponent></MyComponent>
        </div>
    );
}

const componentStyles = { backgroundColor: "blue", color: "white", padding:10, borderRadius: 20 }

function MyComponent() {
    return (
        <div style={ componentStyles }>
            Hello World!
        </div>
    );
}

export default App