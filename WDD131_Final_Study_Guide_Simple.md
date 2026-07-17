# WDD 131 Final Exam Study Guide — Simple Edition

---

## PART 1: HTML/CSS

### The `<head>` Section

The `<head>` holds info about the page that isn't shown directly on the page itself.

- **Meta tags** — `<meta>` tags that describe the page, like character encoding or how it looks on mobile. Example: `<meta charset="UTF-8">`.
- **Title** — `<title>` sets the text shown in the browser tab. Only one per page.
- **Link** — `<link>` connects outside files to your page, usually your CSS stylesheet: `<link rel="stylesheet" href="styles.css">`.
- **Script (with `defer` if in head)** — `<script>` loads JavaScript. Adding `defer` tells the browser to finish loading the HTML first, then run the script.

### Semantic vs. Non-Semantic HTML Elements

- **Semantic elements** tell you what they're for just by their name: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
- **Non-semantic elements** are plain containers with no built-in meaning: `<div>`, `<span>`.
- Use semantic tags when you can — they make your page easier to understand and better for accessibility.

### Units of Measurement

| Unit | Responsive? | What it means |
|---|---|---|
| `px` | No | A fixed, exact size |
| `%` | Yes | Based on the size of the parent element |
| `em` | Yes | Based on the font size of the parent element |
| `rem` | Yes | Based on the font size of the root (html) element |
| `vw` / `vh` | Yes | Based on the width/height of the browser window |

### CSS Selectors

- **Descendancy** — selecting elements based on where they sit relative to another element:
  - `A B` — any B inside A
  - `A > B` — B that is a direct child of A
  - `A + B` — B that comes right after A
- **Pseudo-classes** — target a special state of an element: `:hover` (mouse over it), `:focus` (selected), `:first-child`, `:nth-child()`.

### Media Queries

Media queries let your CSS change based on screen size.

- **`min-width`** — styles apply when the screen is *at least* that wide.
- **`max-width`** — styles apply when the screen is *at most* that wide.
- They go in your CSS file, usually wrapped around the rules you want to change:
```css
@media (min-width: 600px) {
  .container { flex-direction: row; }
}
```

### Reset and Normalize CSS

- **Reset CSS** — removes almost all default browser styling so you start from scratch.
- **Normalize CSS** — keeps helpful default styles but makes them consistent across different browsers.
- Both fix the problem that browsers don't style things the same way by default.

### Accessibility

- **Alt text** — the `alt` attribute describes an image for screen readers and shows if the image doesn't load. Example: `<img src="dog.jpg" alt="A golden retriever running">`.
- **ARIA** — extra labels you add to help screen readers understand custom elements.
  - Use it when a native HTML tag doesn't already explain what something is (like a `<div>` acting as a button).
  - Don't use it when a normal tag already does the job — like just using `<button>` instead of a `<div>` plus ARIA.

### Forms

- **Input attributes** control how a form field behaves:
  - `type` (text, email, password, etc.), `required`, `placeholder`, `name`, `value`, `maxlength`.
- **GET vs. POST** (set with the `method` attribute on `<form>`):
  - **GET** — sends form data in the URL. Good for simple searches, not sensitive info.
  - **POST** — sends form data hidden in the request body. Used for things like logins or anything private.

### Flexbox

Flexbox arranges items in a row or column.

- **`justify-content`** — controls spacing/alignment along the main direction (`center`, `space-between`, `flex-start`, etc.).
- **`flex-direction`** — sets which way items line up: `row` (side by side) or `column` (stacked).

### Linking JS to HTML

Add your JavaScript file to the page with:
```html
<script src="script.js" defer></script>
```
This is better than writing JS directly inside the HTML because it keeps your code organized and reusable.

---

## PART 2: JavaScript

### Variables, Constants, and Scope

- **`var`** — old way of making variables. Avoid using it.
- **`let`** — a variable that can change later.
- **`const`** — a variable that cannot be reassigned once set.
- **Scope** — where in your code a variable can be used.
  - *Global scope* — usable anywhere.
  - *Block scope* — only usable inside the `{ }` it was created in (this applies to `let` and `const`).

### Conditionals (if clause)

```js
if (condition) {
  // runs if true
} else if (otherCondition) {
  // runs if that one is true instead
} else {
  // runs if nothing above was true
}
```
Used to make your code choose between different paths.

### The DOM (Document Object Model)

The DOM is how JavaScript "sees" and can change your HTML page.

- **`.querySelector()`** — grabs the *first* element that matches a CSS selector.
- **`.querySelectorAll()`** — grabs *all* elements that match a CSS selector.
- **`.getElementById()`** — grabs the one element with a matching `id`.
- **`.classList`** — lets you add/remove/toggle classes on an element: `.add()`, `.remove()`, `.toggle()`.
- **`.innerHTML`** — gets or sets the HTML content inside an element (can include tags).
- **`.textContent`** — gets or sets just the plain text inside an element (no tags).
- **`.innerText`** — similar to textContent, but only shows text that's actually visible on the page.
- **`.createElement()`** — makes a brand new HTML element with JavaScript.
- **`.appendChild()`** — adds an element as a child inside another element.
- **`.style`** — lets you change an element's CSS directly from JS, like `element.style.color = "blue";`
- **`.value`** — gets or sets what's typed into a form field.

### Events with `.addEventListener()`

```js
button.addEventListener("click", function () {
  // do something when clicked
});
```
This tells an element to "listen" for something happening (a click, a key press, etc.) and run code when it does.

### Sorting with `.sort()` and Compare Functions

```js
numbers.sort((a, b) => a - b); // puts numbers in order from smallest to largest
```
- By default, `.sort()` treats everything like text, so numbers can sort incorrectly (like `10` before `2`).
- A compare function fixes this by telling JavaScript exactly how to order two items at a time.

### Functions

- **Declaration** — the standard way: `function greet() { ... }`
- **Expression** — saving a function into a variable: `const greet = function() { ... };`
- **Anonymous** — a function with no name, often used inside another function.
- **Arrow function** — shorter way to write a function: `const greet = () => { ... };`
- **Parameters** — the inputs a function takes: `function add(x, y) { return x + y; }`

### Arrays

- **Zero indexing** — the first item in an array is at position `0`, not `1`.
- **`.length`** — tells you how many items are in the array.
- **Adding values** — `.push()` adds to the end, `.unshift()` adds to the beginning.

### Object Arrays

An array made up of objects, like:
```js
const users = [{ name: "Amy" }, { name: "Ben" }];
```
- Access a value: `users[0].name` → `"Amy"`
- Call a method on each item: `users.forEach(user => console.log(user.name));`

### Array Methods

- **`.forEach()`** — runs a function on each item in the array (doesn't make a new array).
- **`.map()`** — makes a *new array* by changing every item using a function.
- **`.filter()`** — makes a *new array* with only the items that pass a test.
- **`.reduce()`** — combines all items in the array into one single value (like a total).

### Data Types and `==` vs `===`

- **Common data types:** String (text), Number, Boolean (true/false), Undefined, Null, Object (includes arrays).
- **`==`** — checks if two values are equal, but ignores type differences. `"5" == 5` → `true`.
- **`===`** — checks if two values *and* their types are equal. `"5" === 5` → `false`.
- Best habit: use `===` almost always, so you don't get unexpected results.

### For Loop

```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```
Repeats a block of code a set number of times. It has 3 parts: starting point (`let i = 0`), the condition to keep going (`i < array.length`), and what happens after each loop (`i++`).

### Random Numbers with `.floor()`

```js
Math.floor(Math.random() * max);
```
- `Math.random()` gives a random decimal between `0` and `1`.
- Multiplying it by `max` stretches that range.
- `Math.floor()` rounds it down to a whole number.

---

*Good luck on your final!*
