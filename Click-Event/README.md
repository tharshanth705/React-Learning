# React Click Events 🖱️⚛️

This project is part of my **React learning journey**, focusing on handling user interactions with **click events**.

The project demonstrates how to use React event handlers such as `onClick` and `onDoubleClick`, work with callback functions, pass arguments, and access the event object.

## 📚 Concepts Covered

### 1. `onClick`

React provides the `onClick` event handler to respond when a user clicks an element.

```jsx
<button onClick={handleClick}>
    Click Me 🫠
</button>
```

React automatically passes the event object to the callback function.

---

### 2. Callback Functions

A function can be passed as a callback to an event handler.

```jsx
const handleClick = () => {
    console.log("OUCH!");
};

<button onClick={handleClick}>
    Click Me
</button>
```

The function is executed **when the button is clicked**, rather than when the component renders.

---

### 3. Passing Arguments to Event Handlers

When an event handler requires an argument, an arrow function can be used.

```jsx
const handleClick = (name) => {
    console.log(`${name} stop clicking me`);
};

<button onClick={() => handleClick("Black")}>
    Click Me 🫠
</button>
```

The arrow function prevents `handleClick("Black")` from executing immediately.

---

### 4. Event Object

React automatically provides an event object to event handlers.

```jsx
const handleClick = (e) => {
    console.log(e);
};
```

The event object provides information about the event and the element that triggered it.

---

### 5. `e.target`

`e.target` refers to the element that triggered the event.

Example:

```jsx
const handleClick = (e) => {
    e.target.textContent = "OUSCH!😹";
};
```

When the button is double-clicked, its text changes.

---

### 6. `onDoubleClick`

`onDoubleClick` is triggered when an element is double-clicked.

```jsx
<button onDoubleClick={handleClick}>
    Click Me 🫠
</button>
```

In this project, the button text changes after a double-click.

---

### 7. Modifying an Element Using the Event Object

The `Profile` component demonstrates using the event object to modify the clicked image.

```jsx
const handleClick = (e) => {
    e.target.style.display = "none";
};
```

When the image is clicked, it disappears from the page.

## 📁 Project Structure

```text
src/
│
├── assets/
│   └── Profile.png
│
├── App.jsx
├── Button.jsx
├── Profile.jsx
└── main.jsx
```

### `App.jsx`

The main component that renders the `Profile` component.

### `Button.jsx`

Demonstrates:

* `onDoubleClick`
* Callback functions
* Event parameters
* `e.target`
* Changing element text

### `Profile.jsx`

Demonstrates:

* `onClick`
* Event parameters
* `e.target`
* Changing CSS properties through the event target

## 🛠️ Technologies Used

* ⚛️ React
* 🟨 JavaScript
* 🎨 JSX
* 🧑‍💻 Vite
* 🌐 HTML/CSS

## 🚀 What I Learned

Through this project, I practiced:

* Handling click events in React
* Using `onClick`
* Using `onDoubleClick`
* Passing callback functions
* Passing arguments to event handlers
* Working with React's event object
* Using `e.target`
* Modifying an element based on a user interaction

## ▶️ Running the Project

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

This project is intentionally simple and is part of my **step-by-step React learning process**. More React concepts and projects will be added as I continue learning. 🚀
