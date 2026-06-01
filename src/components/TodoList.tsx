// Exercise 5: CSS Modules
//
// Style this component using the accompanying .module.css file.
// See exercises/05-css-modules.md for instructions.

import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  removeTodo,
  toggleTodo,
}: {
  todos: Array<{
    title: string;
    id: string;
    completed: boolean;
    createdAt: Date;
  }>;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
