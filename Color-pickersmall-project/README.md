# 🎨 React Color Picker

A simple React project demonstrating how to use the **`useState()` Hook** to manage a selected color and dynamically update the UI.

## 📌 Overview

This project creates a simple **Color Picker** where the user can:

* 🎨 Select a color using an HTML color input
* 🖥️ Display the selected color dynamically
* 🔄 Update the background color when the selected color changes
* 🔤 Display the selected color as an uppercase hexadecimal value

## 🛠️ Technologies Used

* React
* JavaScript
* JSX
* React `useState` Hook
* CSS
* Vite

## 📂 Project Structure

```text
src/
├── App.jsx
├── ColorPicker.jsx
├── main.jsx
└── index.css
```

## 🎨 Color State

The selected color is stored using `useState()`:

```jsx
const [color, setColor] = useState('#FFFFFF');
```

The initial color is **white**.

The `color` state stores the currently selected color, while `setColor` is used to update it.

## 🔄 Handling Color Changes

The `onChange` event detects when the user selects a different color:

```jsx
function handleColorChange(event) {
    setColor(event.target.value);
}
```

The selected color is obtained using:

```jsx
event.target.value
```

and stored in the `color` state.

## 🖥️ Dynamic Color Display

The selected color is applied directly to the `div` using React inline styling:

```jsx
<div
    className="color-display"
    style={{ backgroundColor: color }}
>
```

Whenever the `color` state changes, React re-renders the component and updates the background color.

## 🔤 Displaying the Selected Color

The selected hexadecimal color value is displayed inside the color display:

```jsx
<p>
    Selected color : {color.toLocaleUpperCase()}
</p>
```

For example:

```text
Selected color : #FF5733
```

The `toLocaleUpperCase()` method converts the hexadecimal value to uppercase.

## 🎨 Color Input

The HTML `<input type="color">` element provides the color selection interface:

```jsx
<input
    type="color"
    value={color}
    onChange={handleColorChange}
/>
```

The `value` is connected to the React state, making it a **controlled component**.

When the user selects a color:

```text
Color Input
     ↓
onChange
     ↓
event.target.value
     ↓
setColor()
     ↓
color state updates
     ↓
React re-renders
     ↓
Color display changes
```

## 🧠 Main Concepts

This project demonstrates:

* `useState()` Hook
* State variables and setter functions
* Controlled components
* `onChange` event
* `event.target.value`
* React inline styles
* Dynamic CSS properties
* Updating the UI based on state
* String methods such as `toLocaleUpperCase()`

### Important Pattern

```jsx
const [color, setColor] = useState('#FFFFFF');

function handleColorChange(event) {
    setColor(event.target.value);
}
```

The state value is then used to control the UI:

```jsx
style={{ backgroundColor: color }}
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

* Using `useState()` to store a color value
* Handling the `<input type="color">` element
* Using `onChange` with controlled inputs
* Accessing values using `event.target.value`
* Applying dynamic inline styles in React
* Updating the UI when state changes
* Using JavaScript string methods in JSX

---

⭐ **This project is a simple example of using React state to create an interactive Color Picker.**
