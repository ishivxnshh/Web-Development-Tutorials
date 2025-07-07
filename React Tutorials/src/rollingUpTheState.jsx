import React, { useState } from "react";

// Rolling up the state / unoptimal state management example
function App() {
    return (
        <div>
            <LightBulb />
        </div>
    );
}

function LightBulb() {

    const [bulbOn, setBulbOn] = useState(false);
    return (
        <div>
            <BulbState bulbOn={bulbOn}/>
            <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
        </div>
    );
}

function BulbState({ bulbOn }) {

    return (
        <div>
            {bulbOn ? "Bulb ON" : "Bulb OFF"}
        </div>
    );
}

function ToggleBulbState({ bulbOn, setBulbOn }) {

    function toggle() {
        setBulbOn(!bulbOn);
    }

    return (
        <div>
            <button onClick={toggle}>Toggle the bulb</button>
        </div>
    );
}

export default App;