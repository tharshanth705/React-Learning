# React Updater Function Counter 🚀

A simple React project demonstrating **State Updater Functions** using the `useState` Hook.

This project contains two independent counter components and demonstrates why updater functions are useful when performing multiple state updates.

## 📚 Concept Covered

### State Updater Function

An updater function is a function passed to the state setter that receives the **previous state value** and returns the new state.

```jsx
setCount(c => c + 1);
```

Instead of directly using:

```jsx
setCount(count + 1);
```

Updater functions are especially useful when:

* Multiple state updates happen together.
* The new state depends on the previous state.
* State updates may be queued or batched.
* Writing safer and more predictable state updates.

## 🔢 Multiple State Updates

In this project, the increment function contains:

```jsx
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
```

Therefore, clicking **Increment** increases the counter by **3**.

If you instead wrote:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

all three updates would use the same `count` value from the current render, so they would not produce the expected `+3`.

## 🧩 Components

### `App`

The `App` component renders two independent instances of `MyComponent`.

```jsx
<div className="main-container">
    <MyComponent />
    <MyComponent />
</div>
```

Each component has its **own state**, so changing one counter does not affect the other.

### `MyComponent`

The component uses:

```jsx
const [count, setCount] = useState(0);
```

It provides three actions:

| Button     | Action                   |
| ---------- | ------------------------ |
| Decreament | Decreases the count by 1 |
| Reset      | Resets the count to 0    |
| Increament | Increases the count by 3 |

> Note: The button names intentionally follow the names used in the project. The standard spellings are **Decrement** and **Increment**.

## 🎨 Styling

The project uses modern CSS features including:

* Flexbox
* CSS nesting
* Responsive design
* Hover effects
* Active/click animations
* `backdrop-filter`
* Glassmorphism-style UI
* Keyboard focus styling
* Mobile responsiveness

The two counter components are displayed side-by-side on larger screens and vertically on smaller screens.

## 🛠️ Technologies Used

* React
* JavaScript
* JSX
* CSS
* `useState` Hook
* Vite

## ▶️ Running the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

## 📁 Basic Structure

```text
src/
├── App.jsx
├── MyComponent.jsx
├── index.css
└── main.jsx
```

## 🎯 Learning Goal

The main purpose of this project is to understand how React state updates work and why **updater functions** are important when the next state depends on the previous state.

```jsx
setCount(c => c + 1);
```

This is a small example, but the same concept becomes very important in larger React applications. ⚛️
