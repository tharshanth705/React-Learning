# React `useState()` Hook 🚀

This project is part of my **React learning journey**, focused on understanding and practicing the `useState()` Hook.

## 📚 What I Learned

### React Hooks

React Hooks are special functions that allow functional components to use React features without writing class components.

Some commonly used React Hooks include:

* `useState()`
* `useEffect()`
* `useContext()`
* `useReducer()`
* `useCallback()`
* And more...

### `useState()`

`useState()` is a React Hook that allows a functional component to create and manage **state**.

The basic syntax is:

```jsx
const [state, setState] = useState(initialValue);
```

For example:

```jsx
const [name, setName] = useState("Guest");
```

Here:

* `name` → Current state value
* `setName` → Function used to update the state
* `"Guest"` → Initial state value

When the setter function is called, React updates the state and re-renders the component.

---

## 🧪 Practice Component

### `MyComponent.jsx`

I used `MyComponent` mainly for **practicing and understanding `useState()`**.

It demonstrates managing multiple independent state variables:

```jsx
const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);
```

### Concepts Practiced

* Creating state variables
* Updating string state
* Updating numeric state
* Updating boolean state
* Using setter functions
* Conditional rendering
* Toggling boolean state

Example:

```jsx
<p>Is employed : {isEmployed ? "yes" : "No"}</p>
```

---

## 🧮 Mini Project — Counter

### `Counter.jsx`

The `Counter` component is a small project created to **apply `useState()` in a practical way**.

It contains:

* ➕ Increment button
* 🔄 Reset button
* ➖ Decrement button
* A counter display

The counter state is initialized with:

```jsx
const [count, setCount] = useState(0);
```

The state is then updated using:

```jsx
setCount(count + 1);
```

```jsx
setCount(count - 1);
```

```jsx
setCount(0);
```

This helped me understand how state changes cause a React component to re-render and display the updated value.

---

## 🗂️ Project Structure

```text
useState-hook/
│
├── src/
│   ├── App.jsx
│   ├── Counter.jsx
│   ├── MyComponent.jsx
│   ├── index.css
│   └── ...
│
├── public/
├── package.json
└── README.md
```

---

## 🎯 Main Learning Goals

Through this project, I practiced:

* Understanding React Hooks
* Understanding `useState()`
* Creating state variables
* Updating state with setter functions
* Handling button click events
* Conditional rendering
* Boolean state toggling
* Building a small interactive React component

---

## 🛠️ Technologies Used

* **React**
* **JavaScript (JSX)**
* **CSS**
* **Vite**
* **npm**

---

## 🚀 Running the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite.

---

## 📌 Note

`MyComponent` was created primarily as a **practice component** to experiment with different types of state.

`Counter` was created as a **small practical project** to apply the concepts learned from `useState()`.

---

## 📖 Part of My React Learning Journey

This project is one step in my ongoing journey of learning React, with each project focusing on a specific React concept.
