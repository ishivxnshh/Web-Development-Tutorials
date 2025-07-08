// import { createContext, useContext, useState } from "react";

// const bulbContext = createContext();

// export function BulbProvider({ children }) {

//     const [bulbOn, setBulbOn] = useState(false);

//     return (
//         <bulbContext.Provider value={{bulbOn, setBulbOn}}>
//             {children}
//         </bulbContext.Provider>
//     );
// }

// function App() {
    
//     return (
//         <div>
//             <BulbProvider>
//                 <Light />
//             </BulbProvider>
//         </div>
//     );
// }

// function Light() {

//     return (
//         <div>
//             <LightBulb />
//             <LightSwitch />
//         </div>
//     );
// }

// function LightBulb() {

//     const { bulbOn } = useContext(bulbContext);
//     return (
//         <div>
//             {bulbOn ? "Bulb ON" : "Bulb OFF"}
//         </div>
//     );
// }

// function LightSwitch() {

//     const { bulbOn, setBulbOn } = useContext(bulbContext);

//     function toggle() {
//         setBulbOn(!bulbOn);
//     }

//     return (
//         <div>
//             <button onClick={toggle}>Toggle the bulb</button>
//         </div>
//     );
// }

// export default App;

//----------------------------------------------------------------------------------------------------------------------------------------------

import { createContext, useContext, useState } from "react";

const CountContext = createContext();

function CountContextProvider({ children }) {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

function App() {
    return (
        <CountContextProvider>
            <Increase />
            <Decrease />
            <Value />
        </CountContextProvider>
    )
}

function Increase() {
    const { setCount } = useContext(CountContext);
    return (
        <button onClick={() => setCount(count => count + 1)}>Increase</button>
    );
}

function Decrease() {
    const { setCount } = useContext(CountContext);
    return (
        <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    );
}

function Value() {
    const { count } = useContext(CountContext);
    return (
        <div>Counter: {count}</div>
    );
}

export default App