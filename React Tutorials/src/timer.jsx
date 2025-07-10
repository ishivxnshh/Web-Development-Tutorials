// import { useState, useEffect } from "react";

// function App() {
//   let [counterVisible, setCounterVisible] = useState(true);
//   const [count, setCount] = useState(0);

//   useEffect(function () {
//     const toggle = setInterval(function () {
//       setCounterVisible(c => !c)
//     }, 5000);
//     return function() {
//       return clearInterval(toggle);
//     }
//   }, []);

//   return <div>
//     Hey
//     {counterVisible ? <Counter count={count} setCount={setCount}></Counter> : null}
//     there !
//   </div>
// }

// // mounting, re-rendering, unmounting
// function Counter(props) {

//   console.log("counter");

//   useEffect(function () {
//     console.log("on mount");
//     let clock = setInterval(function () {
//       console.log("from inside set Interval");
//       props.setCount(count => count + 1)
//     }, 1000);
//     return function() {
//       console.log("on unmount");
//       clearInterval(clock);
//     }
//   }, []);

//   return <div>
//     <h1 id="text">{props.count}</h1>
//   </div>
// }

// export default App

//----------------------------------------------------------------------------------------------------------------------------------------------

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(count => count + 1);
  }

  function decrease() {
    setCount2(count => count - 1);
  }

  return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

// mounting, re-rendering, unmounting
function Counter(props) {

  console.log("counter");

  useEffect(function () {
    console.log("mount");
    return function () {
      console.log("unmount");
    }
  }, []);

  useEffect(function () {
    console.log("re-render");
    return function () {
      console.log("cleanup re-render");
    }
  }, [props.count]);

  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2}
  </div>
}

export default App