# Exercise 3: Promises & Async

## Goal

Simulate asynchronous API calls using Promises and `setTimeout`. These functions will later be used in your React hook to load initial data.

## What to build

In `src/utils/todoHelpers.ts`, implement the following:

### `fakeFetchTodos`

Returns a Promise that resolves after a short delay (e.g., 500ms) with an array of seed todos. The seed data should contain at least 3 todo objects (use your `createTodo` function to generate them).

### `fakeSaveTodo`

Takes a todo object. Returns a Promise that resolves after a short delay with the same todo (simulating a successful save to a server).

## Verify

```bash
npm test -- tests/todoHelpers.test.ts
```

Look for the "Exercise 3" test suite to pass.

## Resources

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
