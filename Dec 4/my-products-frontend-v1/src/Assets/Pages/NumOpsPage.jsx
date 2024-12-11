import React, { useState } from 'react'

var NumOpsPage = () => {
  
    var [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement() {
        if(count==0) alert("Negative Not Allowed!");
        else setCount(count-1);
    }

    function reset() {
        setCount(0);
    }

    function random() {
        setCount(Math.floor(Math.random()*(100))+1)
    }

    function multiply() {
        let secNum = prompt("Enter second number");
        setCount(parseInt(count)*secNum)
    }

    return (
    <div>
        <h3>Current Count Value is {count}</h3>
        <button onClick={increment}>Increment</button> &nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button> &nbsp;&nbsp;
        <button onClick={reset}>Reset</button> &nbsp;&nbsp;
        <button onClick={random}>Random Count</button> &nbsp;&nbsp;
        <button onClick={multiply}>Multiply</button>
    </div>
    
  )
}

export default NumOpsPage