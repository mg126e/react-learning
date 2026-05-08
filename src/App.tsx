import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
