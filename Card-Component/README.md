# React Card Component Example 🃏

## 📌 Overview

This example demonstrates how to create a reusable **Card Component** in React.

A Card component is a reusable UI element that can display information in a structured way, such as a profile card, product card, or user information card.

---

## 🧠 Concepts Learned

* Creating reusable React components
* Importing and exporting components
* JSX structure
* Using CSS to style React components
* Displaying images inside React components
* Component reusability

---

## 📂 File Structure

```
Card-Component
│
├── src
│   ├── assets
│   │   └── profile.jpg
│   │
│   ├── App.jsx
│   ├── Card.jsx
│   ├── Card.css
│   └── main.jsx
│
└── README.md
```

---

## 💻 Component Explanation

### Card.jsx

The `Card` component creates a reusable card layout.

It contains:

* Profile image
* Name
* Description text

Example:

```jsx
<Card />
```

The same component can be rendered multiple times:

```jsx
<Card />
<Card />
<Card />
```

without rewriting the same HTML structure.

---

## 🔄 Component Reusability

Instead of writing:

```jsx
<div className="card">
    <img />
    <h2>Name</h2>
    <p>Description</p>
</div>
```

multiple times, React allows us to create a component once:

```jsx
function Card(){
    return (
        <div className="card">
            ...
        </div>
    );
}
```

and reuse it anywhere.

---

## 🎨 Styling

The component is styled using CSS.

Features included:

* Border
* Border radius
* Box shadow
* Padding and margin
* Center alignment
* Image styling

Example:

```css
.card {
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    padding: 20px;
}
```

---

## 🚀 How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL provided by Vite.

---

## 📚 Key Takeaways

✅ React components are reusable UI blocks
✅ Components improve code organization
✅ JSX allows HTML-like syntax inside JavaScript
✅ CSS can be applied to style React components
✅ Images can be imported and used inside components
