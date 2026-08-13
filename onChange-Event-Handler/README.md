# React Form Handling with `onChange` 🚀

This project is a small React practice project focused on **handling form elements using the `onChange` event and `useState()`**.

It demonstrates how React can control and update different types of form inputs as the user interacts with them.

## 📚 Concepts Covered

* `useState()` Hook
* `onChange` event handler
* Controlled components
* `<input>`
* `<input type="number">`
* `<textarea>`
* `<select>`
* Radio buttons
* `value` and `checked` attributes
* Updating state based on user input

## 🧩 Form Elements Practiced

### 1. Text Input

The user's name is stored in React state.

```jsx
const [name, setName] = useState("Guest");
```

The `onChange` event updates the state whenever the user types:

```jsx
function handleNameChange(event) {
    setName(event.target.value);
}
```

---

### 2. Number Input

The quantity is controlled using React state:

```jsx
const [quantity, setQuantity] = useState(1);
```

```jsx
<input
    value={quantity}
    onChange={handleQuantityChange}
    type="number"
/>
```

> Note: `event.target.value` is returned as a string by the browser, even for `type="number"`.

---

### 3. Textarea

A `<textarea>` can also be controlled using React state.

```jsx
const [comment, setComment] = useState("");
```

```jsx
<textarea
    value={comment}
    onChange={handleCommentChange}
    placeholder="Enter delivery Instructions"
/>
```

---

### 4. Select Dropdown

The selected payment method is stored in state:

```jsx
const [payment, setPayment] = useState("");
```

Available options:

* Visa
* MasterCard
* GiftCard

```jsx
<select value={payment} onChange={handlePaymentChange}>
    <option value="">Select an option</option>
    <option value="VISA">Visa</option>
    <option value="MasterCard">MasterCard</option>
    <option value="GiftCard">GiftCard</option>
</select>
```

---

### 5. Radio Buttons

The shipping method uses two radio buttons:

* Pick Up
* Delivery

The selected option is controlled by React state:

```jsx
const [shipping, setShipping] = useState("Delivery");
```

The `checked` attribute determines which radio button is selected:

```jsx
checked={shipping === "Pick up"}
```

and:

```jsx
checked={shipping === "Delivery"}
```

This creates a **controlled radio button group**.

---

# 🧠 What is `onChange`?

`onChange` is a React event handler that runs when the value of a form element changes.

For example:

```jsx
<input onChange={handleNameChange} />
```

When the user types something:

```text
User types
    ↓
onChange event
    ↓
handleNameChange()
    ↓
event.target.value
    ↓
setName()
    ↓
React updates the state
    ↓
UI updates
```

## 🔑 Important Pattern

The main pattern practiced in this project is:

```jsx
const [value, setValue] = useState("");

function handleChange(event) {
    setValue(event.target.value);
}
```

Then:

```jsx
<input
    value={value}
    onChange={handleChange}
/>
```

This is the basic pattern for creating **controlled components in React**.

---

# 🎯 Learning Goal

The purpose of this project is to understand how React handles user input and how `useState()` can be used to keep form elements synchronized with the UI.

This project serves as practice before moving on to more advanced React concepts such as:

* Form submission
* Form validation
* Multiple-input forms
* Dynamic forms
* API integration
* React Hook Form

---

## 🛠 Technologies

* ⚛️ React
* 🟨 JavaScript (ES6+)
* JSX
* Vite

---

## 📈 Concepts Practiced

✅ `useState()`
✅ `onChange`
✅ Controlled inputs
✅ Text input
✅ Number input
✅ Textarea
✅ Select dropdown
✅ Radio buttons
✅ `value`
✅ `checked`
✅ `event.target.value`

---

## 🚀 Key Takeaway

The main idea of this project is:

> **React state controls the form, and `onChange` updates the state whenever the user changes the form value.**

```text
User Input
    ↓
onChange
    ↓
Event Handler
    ↓
setState()
    ↓
React State
    ↓
Updated UI
```
