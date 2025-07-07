import React, { useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1)
    }
    
    return {
        count: count,
        increaseCount: increaseCount
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------

// App.jsx

// import React from "react";
// import { useCounter } from "./useCounter"; // adjust path if needed

// function App() {
//     const { count, increaseCount } = useCounter();

//     return (
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={increaseCount}>Increase</button>
//         </div>
//     );
// }

// export default App;