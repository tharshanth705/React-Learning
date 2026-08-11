import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const Increament = () => {
        setCount(count + 1);
    }
    const Decreament = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">
                {count}
            </p>

            <button className="counter-button" onClick={Increament}>Increament</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={Decreament}>Decreament</button>
        </div>

    );
}
export default Counter