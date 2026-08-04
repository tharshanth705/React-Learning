# My First React Learning 🚀

## 📌 Overview

This is my first React learning example where I explored the basic structure of a React application.

The example demonstrates how a React application can be divided into multiple reusable components such as:

* Header
* Food
* Footer

Each component has its own responsibility and is imported into the main `App` component.

---

## 🧠 Concepts Learned

* React component creation
* JSX syntax
* Functional components
* Importing and exporting components
* Component reusability
* Rendering multiple components
* Using JavaScript inside JSX
* Dynamic values in JSX

---

## 📂 File Structure

```text
My-First-React_Learning
│
├── src
│   ├── App.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Food.jsx
│   └── main.jsx
│
└── README.md
```

---

## 💻 Component Explanation

### App Component

`App.jsx` is the main component that combines other components together.

Example:

```jsx
<Header />
<Food />
<Food />
<Footer />
```

React allows us to create smaller components and combine them to build a complete user interface.

---

## Header Component

The `Header` component represents the top section of the website.

It contains:

* Website title
* Navigation menu
* Navigation links

Example:

```jsx
<header>
    <h1>My Website</h1>
</header>
```

---

## Food Component

The `Food` component demonstrates how JavaScript values can be used inside JSX.

Example:

```jsx
const food1 = "Orange";

<li>{food1}</li>
```

JavaScript variables can be displayed inside JSX using curly brackets `{ }`.

It also demonstrates JavaScript methods inside JSX:

```jsx
<li>{food2.toUpperCase()}</li>
```

Output:

```
BANANA
```

---

## Footer Component

The `Footer` component displays a dynamic copyright year.

Example:

```jsx
&copy; {new Date().getFullYear()}
```

The year updates automatically based on the current year.

---

## 🔄 Component Reusability

Components can be reused multiple times.

Example:

```jsx
<Food />
<Food />
```

The same component can be rendered wherever needed without rewriting the code.

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

Open the Vite local development URL in your browser.

---

## 📚 Key Takeaways

✅ React applications are built using components
✅ Components are reusable UI blocks
✅ JSX allows JavaScript and HTML-like syntax together
✅ Components can be imported and exported
✅ Small components make applications easier to manage
