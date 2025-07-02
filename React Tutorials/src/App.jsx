import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(1);
    console.log(count);

    function increaseCount() {
        setCount((count) => count + 1);
    }

    useEffect(() => {
       let timer =  setInterval(increaseCount, 2000);
       return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div style={{ display: "flex" }}>
                <span style={{ background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5 }}>
                    {count}
                </span>
            </div>
            <img
                style={{ cursor: "pointer" }}
                src="https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg"
                alt="bell icon"
                width={40}
            />
        </div>
    );
}

export default App;