// Exercise 4: React Hooks

import {addTodo as oldAddTodo, createTodo, removeTodo as oldRemoveTodo, toggleTodo as oldToggleTodo} from "../utils/todoHelpers.ts"
import { useEffect, useState } from "react";

interface Todo {
  title: string;
  id: string;
  completed: boolean;
  createdAt: Date;

}

export function useTodos(){
    const [todos, setTodos] = useState<Array<Todo>>([]);
    useEffect(() => {
      const storedTodos = localStorage.getItem("todos"); 
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);
    
    const addTodo = (name : string) => setTodos(prevTodos => {
      localStorage.setItem("todos", JSON.stringify(oldAddTodo(prevTodos, createTodo(name))));
      return oldAddTodo(prevTodos, createTodo(name)
    )});
    const removeTodo = (id : string) => setTodos(prevTodos => {
      localStorage.setItem("todos", JSON.stringify(oldRemoveTodo(prevTodos, id)));
      return oldRemoveTodo(prevTodos, id);
    });
    const toggleTodo = (id : string) => setTodos(prevTodos => {
      localStorage.setItem("todos", JSON.stringify(oldToggleTodo(prevTodos, id)));
      return oldToggleTodo(prevTodos, id);
    });
    
    
    return {todos, addTodo, removeTodo, toggleTodo}
}

// Build a custom hook to manage todo state.
// See exercises/04-react-hooks.md for instructions and run `npm test` to verify.
