import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../src/hooks/useTodos";

describe("Exercise 4: useTodos custom hook", () => {
  it("initializes with an empty todo list", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
  });

  it("adds a todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("New todo");
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0]!.title).toBe("New todo");
    expect(result.current.todos[0]!.completed).toBe(false);
  });

  it("removes a todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("To remove");
    });
    const id = result.current.todos[0]!.id;
    act(() => {
      result.current.removeTodo(id);
    });
    expect(result.current.todos).toHaveLength(0);
  });

  it("toggles a todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("To toggle");
    });
    const id = result.current.todos[0]!.id;
    act(() => {
      result.current.toggleTodo(id);
    });
    expect(result.current.todos[0]!.completed).toBe(true);
    act(() => {
      result.current.toggleTodo(id);
    });
    expect(result.current.todos[0]!.completed).toBe(false);
  });

  it("manages multiple todos independently", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("First");
      result.current.addTodo("Second");
      result.current.addTodo("Third");
    });
    expect(result.current.todos).toHaveLength(3);

    const secondId = result.current.todos[1]!.id;
    act(() => {
      result.current.removeTodo(secondId);
    });
    expect(result.current.todos).toHaveLength(2);
    expect(result.current.todos[0]!.title).toBe("First");
    expect(result.current.todos[1]!.title).toBe("Third");
  });
});
