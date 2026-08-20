# 🚗 React Car List State Management

A simple React project demonstrating how to use **`useState()` with arrays and objects** to create, add, display, and remove cars dynamically.

## 📌 Overview

This project allows the user to:

* ➕ Add a new car
* 📋 Display a list of cars
* ❌ Remove a car by clicking on it
* 📝 Enter the car year, make, and model using input fields

Each car is stored as an object inside an array.

## 🛠️ Technologies Used

* React
* JavaScript
* JSX
* React `useState` Hook
* Vite

## 📂 Project Structure

```text
src/
├── App.jsx
└── MyComponent.jsx
```

## 🚗 Car State

The list of cars is stored using an array state:

```jsx
const [cars, setCars] = useState([]);
```

Each car is represented as an object:

```jsx
const newCar = {
    year: carYear,
    make: carMake,
    model: carModel
};
```

So the `cars` array can contain multiple objects:

```text
[
    { year: 2024, make: "Toyota", model: "Supra" },
    { year: 2025, make: "BMW", model: "M4" }
]
```

## 📝 Input States

Separate state variables are used to store the values entered by the user:

```jsx
const [carYear, setCarYear] = useState(new Date().getFullYear());
const [carMake, setCarMake] = useState("");
const [carModel, setCarModel] = useState("");
```

Each input is controlled by its corresponding state.

For example:

```jsx
<input
    value={carMake}
    type="text"
    onChange={handleMakeChange}
/>
```

## ➕ Adding a Car

When the **Add Car** button is clicked, a new car object is created:

```jsx
const newCar = {
    year: carYear,
    make: carMake,
    model: carModel
};
```

The new car is added to the existing array using the spread operator:

```jsx
setCars(c => [...c, newCar]);
```

### Why use `...c`?

The spread operator copies all existing cars into a new array before adding the new car.

This keeps the existing cars instead of replacing the entire array.

## 🔄 Resetting the Inputs

After adding a car, the input states are reset:

```jsx
setCarYear(new Date().getFullYear());
setCarMake("");
setCarModel("");
```

The year returns to the current year, while the make and model inputs become empty.

## ❌ Removing a Car

A car can be removed by clicking on it:

```jsx
function handleRemoveCar(index) {
    setCars(c => c.filter((_, i) => i !== index));
}
```

The `filter()` method creates a new array containing every car except the selected one.

The `index` identifies which car should be removed.

## 📋 Displaying the Cars

The `map()` method is used to display every car:

```jsx
{cars.map((car, index) =>
    <li key={index} onClick={() => handleRemoveCar(index)}>
        {car.year} {car.make} {car.model}
    </li>
)}
```

Each car object is displayed using its properties:

```text
car.year
car.make
car.model
```

## 🧠 Main Concepts

This project combines several React concepts:

```text
useState()
    ↓
Individual Input States
    ↓
Create Car Object
    ↓
Store Objects inside Array
    ↓
map() → Display Cars
    ↓
filter() → Remove Cars
    ↓
React Re-renders the UI
```

### Adding an object to an array

```jsx
setCars(c => [...c, newCar]);
```

### Removing an object from an array

```jsx
setCars(c => c.filter((_, i) => i !== index));
```

### Updating input state

```jsx
setCarMake(event.target.value);
```

## 🖥️ Example

After entering:

```text
Year: 2025
Make: Toyota
Model: Supra
```

and clicking **Add Car**, the list becomes:

```text
List of Cars

• 2025 Toyota Supra
```

Adding another car:

```text
• 2025 Toyota Supra
• 2024 BMW M4
```

Clicking a car removes it from the list.

## 🚀 Running the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

## 📚 What I Learned

* Using `useState()` with arrays
* Using `useState()` with multiple input values
* Storing objects inside an array
* Adding objects to array state
* Using the spread operator (`...`)
* Removing items using `filter()`
* Rendering arrays using `map()`
* Handling controlled inputs
* Using `event.target.value`
* Resetting input state after adding an item
* Passing indexes to event handlers
* Updating React state and triggering re-renders

---

⭐ **This project demonstrates how React can manage an array of objects using `useState()`.**
