import { useState } from "react";

function MyComponent() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "mustang"
    });

    function handleYearChange(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }

    function handleMakeChange(event) {
        setCar(c => ({ ...c, make: event.target.value }));
    }

    function handleModelChange(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }

    return (
        <div className="car-container">

            <p className="car-title">
                Your Favourite Car is:{" "}
                <span>
                    {car.year} {car.make} {car.model}
                </span>
            </p>

            <input
                className="car-input"
                type="number"
                value={car.year}
                onChange={handleYearChange}
            />

            <input
                className="car-input"
                type="text"
                value={car.make}
                onChange={handleMakeChange}
            />

            <input
                className="car-input"
                type="text"
                value={car.model}
                onChange={handleModelChange}
            />

        </div>
    );
}

export default MyComponent;