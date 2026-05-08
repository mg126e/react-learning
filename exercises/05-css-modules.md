# Exercise 5: CSS Modules

## Goal

Style your todo app using CSS Modules. Each component has a co-located `.module.css` file ready for you to fill in.

## What to build

### Wire up your components

Before styling, connect everything together:

1. Use your `useTodos` hook in `App.tsx` to get the todo state and actions
2. Pass the appropriate data and callbacks to `TodoList`, `TodoItem`, and `AddTodo`
3. Implement the rendering logic in each component (map over todos, handle form submission, etc.)

### Style with CSS Modules

Import styles from the `.module.css` file in each component:

```tsx
import styles from "./TodoList.module.css";
```

Then apply classes using `className={styles.someClass}`.

### Suggested styling tasks

- **App.module.css** — Center the app, set a max-width, add padding
- **TodoList.module.css** — Style the list container (remove default list bullets, add spacing)
- **TodoItem.module.css** — Style individual items. Apply a strikethrough or muted style when a todo is completed (hint: conditionally apply a class)
- **AddTodo.module.css** — Style the input and submit button

### Conditional classes

For completed todos, you'll want to conditionally apply a CSS class:

```tsx
className={`${styles.item} ${todo.completed ? styles.completed : ""}`}
```

## Verify

Run the dev server and check your work visually:

```bash
npm run dev
```

## Resources

- [CSS Modules (Vite docs)](https://vite.dev/guide/features.html#css-modules)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [Responding to events](https://react.dev/learn/responding-to-events)
