# 🚗 React Car State Management

A simple React project demonstrating how to use the **`useState` hook with an object** to manage multiple related values.

## 📌 Overview

This project allows the user to dynamically update their favourite car's:

* 📅 Year
* 🏭 Make
* 🚘 Model

The displayed car information updates automatically whenever an input value changes.

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

### `MyComponent.jsx`

The `MyComponent` component stores the car information in a single state object:

```jsx
const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "mustang"
});
```

The state contains three properties:

```text
car.year
car.make
car.model
```

## 🔄 Updating the State

Each input has its own change handler.

### Year

```jsx
function handleYearChange(event) {
    setCar(c => ({ ...c, year: event.target.value }));
}
```

### Make

```jsx
function handleMakeChange(event) {
    setCar(c => ({ ...c, make: event.target.value }));
}
```

### Model

```jsx
function handleModelChange(event) {
    setCar(c => ({ ...c, model: event.target.value }));
}
```

### Why use `...c`?

The spread operator copies the existing car object before changing one property.

For example:

```jsx
setCar(c => ({ ...c, year: event.target.value }));
```

This means:

1. Copy the existing `car` object.
2. Change only the `year`.
3. Keep `make` and `model` unchanged.

Without `...c`, updating `year` could replace the entire object and remove the other properties.

## 🖥️ User Interface

The component displays:

```text
Your Favourite Car is : 2024 Ford mustang
```

The user can then modify the values using the three input fields.

For example:

```text
Year: 2025
Make: Toyota
Model: Supra
```

The displayed result automatically becomes:

```text
Your Favourite Car is : 2025 Toyota Supra
```

## 🧩 App Component

`App.jsx` imports and renders `MyComponent`:

```jsx
import MyComponent from "./MyComponent"

function App() {
    return (
        <>
            <MyComponent />
        </>
    )
}

export default App
```

## 🎯 Main Concept

The main purpose of this project is to understand **how to manage multiple values inside one React state object**.

The important pattern is:

```jsx
setState(previousState => ({
    ...previousState,
    property: newValue
}));
```

This is especially useful when several related pieces of data belong together.

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

* Using `useState()` with an object
* Updating individual object properties
* Using the spread operator (`...`)
* Handling input changes with `onChange`
* Using `event.target.value`
* Creating reusable React components
* Passing state values into JSX

---

⭐ **This project is a basic example of React object state management.**