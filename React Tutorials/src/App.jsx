import { useEffect, useState } from "react";
import useDebounce from "./customHooks/useDebounce";

function App() {
    const [inputValue, setInputValue] = useState("");
    const useDebouncedValue = useDebounce(inputValue, 200);

    function change(e) {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        console.log("Expensive Operations");
    }, [useDebouncedValue]);

    return (
        <div>
            <input type="text" onChange={change} />
        </div>
    );
}

export default App;
