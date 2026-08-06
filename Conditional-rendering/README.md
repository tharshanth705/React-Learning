# React Conditional Rendering

A simple React project demonstrating **Conditional Rendering** using **Props**, **Default Props (JavaScript default parameters)**, and **PropTypes**.

## 📚 Concepts Covered

- JSX
- Functional Components
- Props
- Default Parameter Values
- Conditional Rendering
- Ternary Operator (`? :`)
- PropTypes Validation
- Basic CSS Styling

## 📂 Project Structure

```
src/
│── App.jsx
│── UserGreeting.jsx
│── index.css
│── main.jsx
```

## 🚀 Features

- Displays a personalized welcome message when the user is logged in.
- Shows a login prompt when the user is not logged in.
- Uses JavaScript default parameters for missing props.
- Validates props using `PropTypes`.
- Applies different CSS styles based on the rendered message.

## 💻 Example

### Logged In

```jsx
<UserGreeting
  isLoggedIn={true}
  username="Mr Black"
/>
```

**Output**

```
Welcome Mr Black
```

---

### Guest User

```jsx
<UserGreeting />
```

**Output**

```
Please log in to continue
```

---

### Logged In Without Username

```jsx
<UserGreeting isLoggedIn={true} />
```

**Output**

```
Welcome Guest
```

## 🛠 Technologies Used

- React
- Vite
- JavaScript (ES6+)
- PropTypes
- CSS

## 📦 Installation

```bash
git clone <repository-url>

cd <repository-folder>

npm install

npm run dev
```

## 🎯 Learning Outcomes

After completing this project, I learned how to:

- Pass data using props
- Set default values with JavaScript default parameters
- Render different UI based on conditions
- Use the ternary operator in JSX
- Validate props with PropTypes
- Style React components using CSS

---

⭐ This project is part of my React learning journey.