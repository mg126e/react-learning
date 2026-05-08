import { describe, it, expect, vi } from "vitest";
import {
  createTodo,
  addTodo,
  removeTodo,
  toggleTodo,
  getCompletedTodos,
  getPendingTodos,
  filterTodos,
  searchTodos,
  formatTodoTitle,
  fakeFetchTodos,
  fakeSaveTodo,
} from "../src/utils/todoHelpers";
import type { Todo } from "../src/types/todo";

const makeTodo = (overrides: Partial<Todo> = {}): Todo => ({
  id: "1",
  title: "Test todo",
  completed: false,
  createdAt: new Date("2024-01-01"),
  ...overrides,
});

describe("Exercise 1: Arrays & Objects", () => {
  describe("createTodo", () => {
    it("creates a todo with the given title", () => {
      const todo = createTodo("Buy groceries");
      expect(todo.title).toBe("Buy groceries");
      expect(todo.completed).toBe(false);
      expect(todo.id).toBeDefined();
      expect(todo.id.length).toBeGreaterThan(0);
      expect(todo.createdAt).toBeInstanceOf(Date);
    });

    it("generates unique ids for each todo", () => {
      const todo1 = createTodo("First");
      const todo2 = createTodo("Second");
      expect(todo1.id).not.toBe(todo2.id);
    });
  });

  describe("addTodo", () => {
    it("returns a new array with the todo appended", () => {
      const todos: Todo[] = [makeTodo({ id: "1" })];
      const newTodo = makeTodo({ id: "2", title: "New" });
      const result = addTodo(todos, newTodo);
      expect(result).toHaveLength(2);
      expect(result[1]).toEqual(newTodo);
    });

    it("does not mutate the original array", () => {
      const todos: Todo[] = [makeTodo()];
      const newTodo = makeTodo({ id: "2" });
      const result = addTodo(todos, newTodo);
      expect(result).not.toBe(todos);
      expect(todos).toHaveLength(1);
    });
  });

  describe("removeTodo", () => {
    it("removes the todo with the given id", () => {
      const todos: Todo[] = [
        makeTodo({ id: "1" }),
        makeTodo({ id: "2", title: "Keep" }),
      ];
      const result = removeTodo(todos, "1");
      expect(result).toHaveLength(1);
      expect(result[0]!.id).toBe("2");
    });

    it("does not mutate the original array", () => {
      const todos: Todo[] = [makeTodo({ id: "1" })];
      const result = removeTodo(todos, "1");
      expect(result).not.toBe(todos);
      expect(todos).toHaveLength(1);
    });
  });

  describe("toggleTodo", () => {
    it("toggles completed from false to true", () => {
      const todos: Todo[] = [makeTodo({ id: "1", completed: false })];
      const result = toggleTodo(todos, "1");
      expect(result[0]!.completed).toBe(true);
    });

    it("toggles completed from true to false", () => {
      const todos: Todo[] = [makeTodo({ id: "1", completed: true })];
      const result = toggleTodo(todos, "1");
      expect(result[0]!.completed).toBe(false);
    });

    it("does not mutate the original array or todo objects", () => {
      const original = makeTodo({ id: "1", completed: false });
      const todos: Todo[] = [original];
      const result = toggleTodo(todos, "1");
      expect(result).not.toBe(todos);
      expect(result[0]).not.toBe(original);
      expect(original.completed).toBe(false);
    });
  });

  describe("getCompletedTodos", () => {
    it("returns only completed todos", () => {
      const todos: Todo[] = [
        makeTodo({ id: "1", completed: true }),
        makeTodo({ id: "2", completed: false }),
        makeTodo({ id: "3", completed: true }),
      ];
      const result = getCompletedTodos(todos);
      expect(result).toHaveLength(2);
      expect(result.every((t) => t.completed)).toBe(true);
    });
  });

  describe("getPendingTodos", () => {
    it("returns only incomplete todos", () => {
      const todos: Todo[] = [
        makeTodo({ id: "1", completed: true }),
        makeTodo({ id: "2", completed: false }),
        makeTodo({ id: "3", completed: false }),
      ];
      const result = getPendingTodos(todos);
      expect(result).toHaveLength(2);
      expect(result.every((t) => !t.completed)).toBe(true);
    });
  });
});

describe("Exercise 2: Strings & Callbacks", () => {
  describe("filterTodos", () => {
    it("filters todos using the provided predicate callback", () => {
      const todos: Todo[] = [
        makeTodo({ id: "1", title: "Buy milk" }),
        makeTodo({ id: "2", title: "Walk dog" }),
        makeTodo({ id: "3", title: "Buy eggs" }),
      ];
      const result = filterTodos(todos, (todo) => todo.title.startsWith("Buy"));
      expect(result).toHaveLength(2);
    });
  });

  describe("searchTodos", () => {
    it("returns todos whose title contains the query (case-insensitive)", () => {
      const todos: Todo[] = [
        makeTodo({ id: "1", title: "Buy Groceries" }),
        makeTodo({ id: "2", title: "Walk the dog" }),
        makeTodo({ id: "3", title: "grocery list" }),
      ];
      const result = searchTodos(todos, "grocer");
      expect(result).toHaveLength(2);
    });

    it("returns all todos if query is empty", () => {
      const todos: Todo[] = [makeTodo(), makeTodo({ id: "2" })];
      const result = searchTodos(todos, "");
      expect(result).toHaveLength(2);
    });
  });

  describe("formatTodoTitle", () => {
    it("trims whitespace and capitalizes the first letter", () => {
      expect(formatTodoTitle("  hello world  ")).toBe("Hello world");
    });

    it("handles single character strings", () => {
      expect(formatTodoTitle("a")).toBe("A");
    });

    it("handles already capitalized strings", () => {
      expect(formatTodoTitle("Hello")).toBe("Hello");
    });
  });
});

describe("Exercise 3: Promises & Async", () => {
  describe("fakeFetchTodos", () => {
    it("returns a promise that resolves with an array of todos", async () => {
      vi.useFakeTimers();
      const promise = fakeFetchTodos();
      vi.runAllTimers();
      const todos = await promise;
      expect(Array.isArray(todos)).toBe(true);
      expect(todos.length).toBeGreaterThan(0);
      todos.forEach((todo) => {
        expect(todo).toHaveProperty("id");
        expect(todo).toHaveProperty("title");
        expect(todo).toHaveProperty("completed");
        expect(todo).toHaveProperty("createdAt");
      });
      vi.useRealTimers();
    });
  });

  describe("fakeSaveTodo", () => {
    it("returns a promise that resolves with the saved todo", async () => {
      vi.useFakeTimers();
      const todo = makeTodo({ title: "Save me" });
      const promise = fakeSaveTodo(todo);
      vi.runAllTimers();
      const saved = await promise;
      expect(saved).toEqual(todo);
      vi.useRealTimers();
    });
  });
});
