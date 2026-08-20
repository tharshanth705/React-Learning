import React, { useState } from "react";

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);

    }
    function handleModelChange(event) {
        setCarModel(event.target.value)
    }


    return (
        <div>
            <h2>List of Cars</h2>

            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}

            </ul>

            <input value={carYear} type="number" onChange={handleYearChange} /><br />
            <input value={carMake} type="text" onChange={handleMakeChange}
                placeholder="Enter Car Make " /><br />
            <input value={carModel} type="text" onChange={handleModelChange}
                placeholder="Enter Car Model " /><br />

            <button onClick={handleAddCar} >Add Car</button>

        </div>
    );
}
export default MyComponent