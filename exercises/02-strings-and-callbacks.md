# Exercise 2: Strings & Callbacks

## Goal

Implement utility functions that work with strings and accept callback functions. These build on exercise 1 and go in the same file.

## What to build

In `src/utils/todoHelpers.ts`, implement the following:

### `filterTodos`

Takes a list of todos and a predicate callback. The predicate receives a single todo and returns a boolean. Return a new array containing only the todos for which the predicate returns `true`.

### `searchTodos`

Takes a list of todos and a query string. Returns todos whose title contains the query. The search should be **case-insensitive**. If the query is empty, return all todos.

### `formatTodoTitle`

Takes a raw title string. Trims leading/trailing whitespace and capitalizes the first character. Returns the formatted string.

## Verify

```bash
npm test -- tests/todoHelpers.test.ts
```

Look for the "Exercise 2" test suite to pass.

## Resources

- [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [String.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [String.prototype.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [Callback function (MDN Glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
