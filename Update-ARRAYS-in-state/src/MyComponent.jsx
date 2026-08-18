import React, { useState } from "react";

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood])

    }
    function handleRemoveFoods(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Foods </h2>
            <ul>
                {foods.map((foods, index) =>
                    <li key={index} onClick={() => handleRemoveFoods(index)}>
                        {foods}
                    </li>)}
            </ul>

            <input type="text" placeholder="Enter food Name :" id="foodInput" />
            <button onClick={handleAddFood}> Add Food </button>
        </div>

    );
}
export default MyComponent