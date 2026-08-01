# Styling React Components with CSS

There are several ways to style React components without using external CSS frameworks or preprocessors.

## 1. External CSS

* Create a separate `.css` file.
* Import it into the component.
* Styles are **global** and can affect other components if class names are reused.

**Example:**

* `Button.jsx`
* `Button.css`

---

## 2. CSS Modules

* Create a `.module.css` file.
* Import it as a module.
* Styles are **scoped** to the component, preventing class name conflicts.
* Recommended for medium and large React applications.

**Example:**

* `Button.jsx`
* `Button.module.css`

---

## 3. Inline Styles

* Define styles as JavaScript objects.
* Apply them using the `style` prop.
* Best for simple or dynamic styles.
* Does **not** support CSS pseudo-classes like `:hover` or `:focus` directly.

**Example:**

```jsx
const styles = {
  backgroundColor: "royalblue",
  color: "white",
};

<button style={styles}>Click Me</button>
```

---

### Summary

| Method        | Best For              | Pros                               | Cons                                           |
| ------------- | --------------------- | ---------------------------------- | ---------------------------------------------- |
| External CSS  | Small projects        | Simple and familiar                | Global styles may conflict                     |
| CSS Modules   | Medium/Large projects | Scoped styles, no naming conflicts | More files to manage                           |
| Inline Styles | Dynamic styling       | Easy to use with JavaScript        | No direct support for `:hover`, `:focus`, etc. |
