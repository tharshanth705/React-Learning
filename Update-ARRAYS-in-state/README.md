# 🍎 React Food List State Management

A simple React project demonstrating how to use the **`useState` Hook with an array** to add and remove items dynamically.

## 📌 Overview

This project creates a simple food list where the user can:

* ➕ Add a new food
* ❌ Remove a food by clicking on it
* 📋 Display all foods dynamically using `map()`

The food list is stored inside React state, so the UI automatically updates whenever the list changes.

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

The food list is stored in an array using `useState()`:

```jsx
const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
```

The initial state contains three foods:

```text
Apple
Orange
Banana
```

## ➕ Adding a Food

The input value is retrieved and added to the existing array:

```jsx
function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f, newFood]);
}
```

### Why use `...f`?

The spread operator copies all existing foods into a new array before adding the new food.

For example:

```jsx
setFoods(f => [...f, newFood]);
```

This means:

1. Copy the existing food list.
2. Add the new food to the end.
3. Store the new array in state.
4. React re-renders the component.

## ❌ Removing a Food

A food can be removed by clicking on it:

```jsx
function handleRemoveFoods(index) {
    setFoods(foods.filter((_, i) => i !== index));
}
```

The `filter()` method creates a new array containing every item except the selected item.

The `index` identifies which food should be removed.

## 🔄 Displaying the List

The `map()` method is used to display every food:

```jsx
{foods.map((foods, index) =>
    <li key={index} onClick={() => handleRemoveFoods(index)}>
        {foods}
    </li>
)}
```

Each food is rendered as a `<li>` element.

When a food is clicked:

```jsx
onClick={() => handleRemoveFoods(index)}
```

the corresponding food is removed from the state.

## 🧠 Main Concepts

This project demonstrates:

```text
useState()
    ↓
Array State
    ↓
map() → Display items
    ↓
Spread Operator → Add items
    ↓
filter() → Remove items
    ↓
React re-renders the UI
```

### Important Patterns

Adding an item:

```jsx
setFoods(f => [...f, newFood]);
```

Removing an item:

```jsx
setFoods(foods.filter((_, i) => i !== index));
```

## 🖥️ Example

Initial list:

```text
List of Foods

• Apple
• Orange
• Banana
```

After adding `Mango`:

```text
List of Foods

• Apple
• Orange
• Banana
• Mango
```

Clicking `Orange` removes it:

```text
List of Foods

• Apple
• Banana
• Mango
```

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
* Adding items to an array state
* Using the spread operator (`...`)
* Removing items using `filter()`
* Rendering arrays using `map()`
* Using `key` when rendering lists
* Handling click events
* Updating React state and triggering re-renders
* Working with array indexes in React

---

⭐ **This project is a basic example of managing and modifying array state in React.**
