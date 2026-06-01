import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import styles from "./App.module.css";
import { useTodos } from "./hooks/useTodos";
import { getPendingTodos } from "./utils/todoHelpers";
import { useState } from "react";

export function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
  const [showPendingOnly, setShowPendingOnly] = useState(false);
  const displayedTodos = showPendingOnly ? getPendingTodos(todos) : todos;
  
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <h1 className={styles.title}>Todo App</h1>

        <AddTodo addTodo={addTodo} />
        <button
          className={styles.uncompletedButton}
          onClick={() => setShowPendingOnly((currentValue) => !currentValue)}
        >
          {showPendingOnly ? "Show All Todos" : "Show Uncompleted Todos"}
        </button>
        <TodoList todos={displayedTodos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}
