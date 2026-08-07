# React List Component 🍎🥦

A simple React application that displays lists of fruits and vegetables using reusable components.

This project demonstrates basic React concepts such as:

* Components
* Props
* Props destructuring
* Default props values
* Rendering lists using `.map()`
* Conditional rendering
* React `key` attribute
* PropTypes validation concept

---

## 📌 Features

* Displays fruits and vegetables separately
* Uses a reusable `List` component
* Passes data from parent component (`App`) to child component (`List`)
* Dynamically creates list items using JavaScript `.map()`
* Uses unique IDs as React keys

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* JSX
* Vite

---

## 📂 Project Structure

```
src/
│
├── App.jsx
├── List.jsx
├── main.jsx
└── App.css
```

---

## 🔄 How It Works

### App Component

The `App` component stores the data:

```javascript
const fruits = [
  { id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 }
];
```

It sends the data to the `List` component using props:

```jsx
<List items={fruits} category="Fruits" />
```

---

### List Component

The `List` component receives the props:

```javascript
function List({ category = "Category", items = [] })
```

* `category` → heading name
* `items` → array containing list data

The array is converted into JSX elements using `.map()`:

```javascript
const listItems = items.map(item =>
    <li key={item.id}>
        {item.name} : {item.calories}
    </li>
);
```

---

## 🧠 Concepts Practiced

### 1. Props

Props allow data to be passed from a parent component to a child component.

Example:

```jsx
<List items={fruits} category="Fruits" />
```

---

### 2. Destructuring Props

Instead of:

```javascript
props.category
props.items
```

we can directly extract values:

```javascript
function List({category, items})
```

---

### 3. Default Values

If no value is provided:

```javascript
category = "Category"
items = []
```

will be used.

---

### 4. Rendering Lists

React uses JavaScript `.map()` to create multiple elements:

```javascript
items.map(item => <li>{item.name}</li>)
```

---

### 5. React Keys

Each list item needs a unique key:

```jsx
<li key={item.id}>
```

Keys help React identify which items changed during updates.

---

## 🚀 Installation and Running

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 📚 Future Improvements

Possible improvements:

* Add CSS styling
* Add sorting options
* Add filtering by calories
* Add search functionality
* Convert the project to TypeScript

---

## 👨‍💻 Author

Created while learning React fundamentals.
