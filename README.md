# Todo App — Intern Onboarding Project

Welcome! This project is designed to help you build practical skills with TypeScript, JavaScript fundamentals, and React before joining the team. You'll build a todo app from scratch, guided by a series of exercises.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- npm (comes with Node.js)

### Setup

```bash
npm install
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm test` | Run tests in watch mode |
| `npm run typecheck` | Run the TypeScript compiler (type checking only) |
| `npm run build` | Type check and build for production |

## Project Structure

```
src/
├── types/
│   └── todo.ts              # Todo interface (provided)
├── utils/
│   └── todoHelpers.ts       # Utility functions (you implement)
├── hooks/
│   └── useTodos.ts          # Custom React hook (you implement)
├── components/
│   ├── TodoList.tsx          # Component (you implement)
│   ├── TodoItem.tsx          # Component (you implement)
│   └── AddTodo.tsx           # Component (you implement)
├── App.tsx                   # App shell (you wire up)
└── main.tsx                  # Entry point (provided)

exercises/                    # Instructions for each exercise
tests/                        # Test files (provided, do not modify)
```

## Exercises

Complete these in order. Each exercise builds on the previous one.

| # | Topic | File to edit | Verify |
|---|---|---|---|
| 1 | Arrays & Objects | `src/utils/todoHelpers.ts` | `npm test -- tests/todoHelpers.test.ts` |
| 2 | Strings & Callbacks | `src/utils/todoHelpers.ts` | `npm test -- tests/todoHelpers.test.ts` |
| 3 | Promises & Async | `src/utils/todoHelpers.ts` | `npm test -- tests/todoHelpers.test.ts` |
| 4 | React Hooks | `src/hooks/useTodos.ts` | `npm test -- tests/useTodos.test.tsx` |
| 5 | CSS Modules | Components + `.module.css` files | `npm run dev` (visual) |

Read the instructions in the `exercises/` folder for each one. The test files in `tests/` serve as the definitive spec — if you get stuck, reading the tests will show you exactly what's expected.

## How to Work Through This

1. Read the exercise markdown file
2. Implement the solution in the specified file
3. Run the tests to verify your implementation
4. Run `npm run typecheck` to make sure your types are correct
5. Move to the next exercise

## Tips

- The `Todo` interface in `src/types/todo.ts` is provided for you — use it throughout
- Don't modify the test files
- All array operations should be **immutable** (never modify the original array)
- If you get stuck, the test file shows exactly what inputs and outputs are expected
- Use `npm run dev` at any time to see your app in the browser

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Vite Documentation](https://vite.dev/guide/)
