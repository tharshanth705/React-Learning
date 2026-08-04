# React Props, PropTypes & Default Values

## 📌 Project Overview

This project demonstrates how **props** are passed from a parent component (`App`) to a child component (`Student`) in React.

It also demonstrates:

* Passing data using props
* Destructuring props
* Default values using JavaScript default parameters
* Type checking using PropTypes

---

## 🔹 What are Props?

**Props (properties)** are read-only data passed from a parent component to a child component.

A parent component can send values like:

```jsx
<Student name="Mr.Black_" age={30} isStudent={true} />
```

The child component receives these values and displays them.

### Props are:

* ✅ Read-only
* ✅ Used for communication between components
* ✅ Passed from parent → child

---

## 🔹 Passing Different Data Types

### String

```jsx
<Student name="Smith" />
```

Strings are written directly.

---

### Number and Boolean

```jsx
<Student age={42} isStudent={false} />
```

Numbers and boolean values must be inside `{ }`.

---

## 🔹 Destructuring Props

Instead of:

```jsx
function Student(props) {
    props.name
    props.age
}
```

Modern React allows:

```jsx
function Student({ name, age, isStudent }) {

}
```

This directly extracts values from the props object.

---

## 🔹 Default Values

Modern React uses JavaScript default parameters instead of `defaultProps`.

Example:

```jsx
function Student({
    name = "Guest",
    age = 0,
    isStudent = false
}) {

}
```

If a value is not provided:

```jsx
<Student />
```

React uses:

```
Name: Guest
Age: 0
Student: No
```

If only some values are provided:

```jsx
<Student name="Peter"/>
```

Output:

```
Name: Peter
Age: 0
Student: No
```

---

## 🔹 PropTypes

PropTypes are used to check whether props have the correct data type.

Example:

```jsx
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
```

This helps catch mistakes during development.

Example:

Incorrect:

```jsx
<Student age="hello"/>
```

React will show a warning because `age` should be a number.

---

## 🔹 Why Not defaultProps?

Older React used:

```jsx
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
```

However, for function components, React moved away from `defaultProps`.

The recommended modern approach is:

```jsx
function Student({name = "Guest"})
```

because it uses normal JavaScript features.

---

## 🔹 Component Structure

```
src
│
├── App.jsx
│   └── Sends props to Student component
│
└── Student.jsx
    └── Receives and displays props
```

---

## Key Concepts Learned

✅ React Components
✅ Parent-child communication
✅ Props
✅ Props destructuring
✅ Default parameters
✅ PropTypes validation

---

## Example Output

```
Name: Mr.Black_
Age: 30
Student: Yes

Name: Smith
Age: 42
Student: No

Name: Guest
Age: 0
Student: No
```
