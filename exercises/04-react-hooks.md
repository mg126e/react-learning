# Exercise 4: React Hooks

## Goal

Build a custom React hook that manages todo state. This hook will combine your utility functions from exercises 1-3 into a reusable piece of stateful logic.

## What to build

In `src/hooks/useTodos.ts`, implement:

### `useTodos`

A custom hook that returns an object with:

- `todos` — the current array of todos
- `addTodo` — a function that takes a title string and adds a new todo to the list
- `removeTodo` — a function that takes an id and removes the matching todo
- `toggleTodo` — a function that takes an id and toggles the matching todo's completed state

The hook should use `useState` to manage the todos array. Use your utility functions from `todoHelpers.ts` inside the hook to keep the logic clean.

### Bonus (not tested, but encouraged)

- Use `useEffect` to load initial todos from `fakeFetchTodos` when the hook first mounts
- Add an `isLoading` state that is `true` while the fake fetch is in progress
- Persist todos to `localStorage` and restore them on mount

## Verify

```bash
npm test -- tests/useTodos.test.tsx
```

## Resources

- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
