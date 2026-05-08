# Exercise 1: Arrays & Objects

## Goal

Implement utility functions that create and manipulate todo data using arrays and objects. All functions should be **immutable** — never modify the original data.

## What to build

In `src/utils/todoHelpers.ts`, implement the following:

### `createTodo`

Takes a title string and returns a new `Todo` object. The todo should have a unique `id`, the given `title`, `completed` set to `false`, and a `createdAt` date set to the current time.

### `addTodo`

Takes the current list of todos and a new todo. Returns a new array with the new todo appended to the end.

### `removeTodo`

Takes the current list of todos and an id. Returns a new array without the todo that matches the given id.

### `toggleTodo`

Takes the current list of todos and an id. Returns a new array where the matching todo has its `completed` value flipped. Should not mutate the original todo object.

### `getCompletedTodos`

Takes a list of todos. Returns a new array containing only the todos where `completed` is `true`.

### `getPendingTodos`

Takes a list of todos. Returns a new array containing only the todos where `completed` is `false`.

## Verify

```bash
npm test -- tests/todoHelpers.test.ts
```

Look for the "Exercise 1" test suite to pass.

## Resources

- [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [crypto.randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
