import { useEffect, useRef } from "react";


export function usePrev(value) {
    const ref = useRef();
    console.log(`re-render happened with new value: ${value}`);

    useEffect(() => {
        console.log(`updated the ref to be: ${value}`);
        ref.current = value;
    }, [value])

    console.log(`returned: ${ref.current}`);
    return ref.current;
}

//----------------------------------------------------------------------------------------------------------------------------------------------

// App.jsx

// import React, { useState } from "react";
// import "./App.css";
// import { usePrev } from "./customHooks/usePrev";

// function App() {
//     const [state, setState] = useState(0);
//     const prev = usePrev(state);

//     return (
//         <div className="center-screen">
//             <p>Current: {state}</p>
//             <button onClick={
//                 () => setState(curr => curr + 1)
//             }>
//                 Click Me
//             </button>
//             <p>Previous: {prev}</p>
//         </div>
//     );
// }

// export default App