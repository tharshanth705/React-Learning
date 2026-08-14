
import React, { useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);


    function handleIncreament() {
        // if it use like this it wont reapeat, instead it should increment once
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // so we need to use "Updater-function"

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function handleDecreament() {
        // even it can be used once " setCount(count - 1)" it works fine , but using updater funtion is good approach 
        setCount(c => c - 1);
    }

    function handleReset() {
        setCount(0);
    }


    return (
        <div className="container">
            <h1 className="countText">
                Count : {count}
            </h1>

            <button value={count} onClick={handleDecreament} className="btn">
                Decreament
            </button>

            <button value={count} onClick={handleReset}  className="btn">
                Reset
            </button >

            <button value={count} onClick={handleIncreament}  className="btn">
                Increament
            </button>

        </div>
    );
}

export default MyComponent