# React Learning 🚀

This repository contains my **React learning journey**, with examples and practice projects as I learn React concepts step by step.

The goal is to understand React fundamentals through hands-on coding and gradually progress toward building real-world applications.

## 📚 React Concepts Covered

| Topic                                                 | Description                                                                                              |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [My First React Learning](./My-First-React_Learning)  | Basic React setup, components and JSX                                                                    |
| [Card Component](./Card-Component)                    | Creating reusable React components                                                                       |
| [CSS Styling](./Style-the-react-Component-with-CSS)   | Styling React components using CSS                                                                       |
| [Props](./props)                                      | Passing data between components, destructuring props, PropTypes and default values                       |
| [Conditional Rendering](./Conditional-Rendering)      | Rendering UI conditionally using logical operators and ternary operators                                 |
| [List Component](./List-Component)                    | Rendering dynamic lists using `map()`, keys, reusable components and arrays through props                |
| [Click Event](./Click-Event)                          | Handling click events, callback functions, event objects, `e.target` and `onDoubleClick`                 |
| [useState Hook](./useState-hook)                      | Managing component state using `useState()`, updating state and building an interactive Counter          |
| [onChange Event](./onChange-Event)                    | Handling form inputs using `onChange`, controlled components and multiple form elements                  |
| [Updater Function](./Updater-Function)                | Using state updater functions to safely update state based on the previous state                         |
| [Object State](./useState-object)                     | Managing multiple related values inside a single state object using `useState()` and the spread operator |
| [Array State](./useState-array)                       | Managing array state, adding items with the spread operator and removing items with `filter()`           |
| [Array of Objects State](./useState-array-of-objects) | Managing an array of objects, adding and removing objects, and handling multiple input states            |

## 🛠 Technologies

* ⚛️ React
* 🟨 JavaScript (ES6+)
* JSX
* CSS
* Vite
* PropTypes
* Git & GitHub

## 📖 Concepts Practiced

### Components

* Creating functional components
* Creating reusable components
* Importing and exporting components
* Understanding component structure

### Props

* Passing data from parent to child components
* Props destructuring
* Default prop values
* Using PropTypes

### Rendering Lists

* Using JavaScript `.map()`
* Creating dynamic JSX elements
* Using unique keys for list items
* Passing arrays through props
* Rendering lists from state
* Rendering objects stored inside arrays

### Conditional Rendering

* Using the logical `&&` operator
* Using ternary operators
* Rendering components based on conditions

### Events

* Handling `onClick` events
* Handling `onDoubleClick` events
* Passing callback functions to event handlers
* Passing arguments to event handlers
* Working with the React event object
* Using `e.target`
* Modifying elements based on events

### State Management

* Understanding React state
* Using the `useState()` Hook
* Creating state variables
* Updating state using setter functions
* Managing multiple state variables
* Updating string, number and boolean states
* Toggling boolean state
* Using state with event handlers
* Understanding component re-rendering
* Building a simple Counter application
* Managing multiple related values inside a single state object
* Accessing individual properties from an object stored in state
* Updating individual object properties without replacing the entire state object
* Using the spread operator to preserve existing object properties
* Using object state with form inputs
* Dynamically updating object state based on `event.target.value`
* Managing arrays using `useState()`
* Adding items to array state using the spread operator
* Removing items from array state using `filter()`
* Managing arrays containing objects
* Creating objects from multiple input values
* Adding objects to an array state
* Removing objects from an array state
* Resetting input states after adding an object

Example:

```jsx
const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "mustang"
});
```

Updating one property while preserving the rest of the object:

```jsx
setCar(c => ({
    ...c,
    year: event.target.value
}));
```

The spread operator copies the existing state before changing the selected property.

### Array State

* Creating an array using `useState()`
* Displaying array items using `map()`
* Adding new items to an array state
* Using the spread operator to preserve existing array items
* Removing items using `filter()`
* Using array indexes when handling item events
* Updating the UI when array state changes

Example:

```jsx
const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
```

Adding a new item:

```jsx
setFoods(f => [...f, newFood]);
```

Removing an item:

```jsx
setFoods(foods.filter((_, i) => i !== index));
```

### Array of Objects State

* Creating an array state containing objects
* Creating objects from multiple input values
* Adding objects to an array using the spread operator
* Accessing object properties inside `map()`
* Removing objects using `filter()`
* Managing separate states for object properties
* Resetting multiple input states after adding an object

Example:

```jsx
const [cars, setCars] = useState([]);

const newCar = {
    year: carYear,
    make: carMake,
    model: carModel
};

setCars(c => [...c, newCar]);
```

Removing a car:

```jsx
setCars(c => c.filter((_, i) => i !== index));
```

### State Updater Functions

* Understanding updater functions
* Using functions with state setter functions
* Updating state based on the previous state
* Understanding why multiple direct state updates may not produce the expected result
* Using multiple updater functions in a single event
* Understanding queued/batched state updates
* Using updater functions as a safe approach when the next state depends on the previous state

Example:

```jsx
setCount(c => c + 1);
```

Multiple updater functions can be used together:

```jsx
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
```

In this example, the count increases by `3`.

### Form Handling

* Using the `onChange` event
* Handling text inputs
* Handling number inputs
* Handling `<textarea>`
* Handling `<select>` dropdowns
* Handling radio buttons
* Using controlled components
* Using `value` to control form elements
* Using `checked` with radio buttons
* Accessing input values using `event.target.value`
* Updating form state with `useState()`
* Managing multiple form-related values inside an object state
* Updating individual object properties from input events
* Managing multiple input states
* Resetting form inputs after submitting data

## 📂 Projects

The repository contains small projects and examples created while learning individual React concepts.

Some examples include:

* 🃏 Reusable Card Component
* 🎨 React Component Styling
* 🧩 Props Practice
* 🔀 Conditional Rendering
* 📋 Dynamic List Rendering
* 🖱️ Click Event Handling
* 🔢 Counter using `useState()`
* 📝 Form Handling using `onChange`
* 🔄 Counter using State Updater Functions
* 🚗 Car State Management using an Object with `useState()`
* 🍎 Food List using Array State
* 🚘 Car List using an Array of Objects

Each project focuses on a specific React concept and is kept separate so the concepts can be easily understood and practiced.

## 📈 Learning Progress

### Completed

* ✅ JSX Basics
* ✅ Components
* ✅ Component Styling
* ✅ Props
* ✅ Conditional Rendering
* ✅ List Rendering
* ✅ Events
* ✅ `useState()` Hook
* ✅ `onChange` Event
* ✅ Controlled Components
* ✅ Basic Form Handling
* ✅ State Updater Functions
* ✅ Object State Management
* ✅ Array State Management
* ✅ Array of Objects State Management

### Currently Learning / Upcoming

* 🔄 `useEffect()` Hook
* 🔄 `useContext()` Hook
* 🔄 `useReducer()` Hook
* 🔄 React Router
* 🔄 Form Validation
* 🔄 API Integration
* 🔄 Working with Backend APIs
* 🔄 React Projects

## 🎯 Goal

My goal is to build a **strong foundation in React** by understanding core concepts, practicing with small projects, and gradually moving toward building real-world applications.

I am learning React through **hands-on coding**, where each folder represents a concept, experiment, or small project that I have practiced.

The long-term goal is to progress from React fundamentals to building complete **full-stack web applications**.

---

⭐ Feel free to explore the projects and follow along with my React learning journey!

**More concepts and projects will be added as I continue learning.** 🚀
