// Exercise 5: CSS Modules
//
// Style this component using the accompanying .module.css file.
// See exercises/05-css-modules.md for instructions.
import styles from "./TodoItem.module.css";

export function TodoItem({
  todo,
  removeTodo,
  toggleTodo,
}: {
  todo: { title: string; id: string; completed: boolean; createdAt: Date };
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) {
  return (
    <div className={styles.todoItem}>
      <span
        className={`${styles.item} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.title}
      </span>

      <div className={styles.container}>
        <button
          className={styles.removeTodoButton}
          onClick={() => removeTodo(todo.id)}
        >
          <img
            className={styles.img}
            src="./src/components/remove-icon.svg"
            alt="Remove"
          />
        </button>
        <button
          className={styles.toggleTodoButton}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}
