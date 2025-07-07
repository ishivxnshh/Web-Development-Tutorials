import { useEffect, useState } from "react";
import useDebounce from "./customHooks/useDebounce";

function App() {
    return (
        <div>
            <input type="text" onChange={change} />
        </div>
    );
}

export default App;
