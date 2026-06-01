// Exercise 5: CSS Modules
//
// Style this component using the accompanying .module.css file.
// See exercises/05-css-modules.md for instructions.
import { useState, type KeyboardEvent } from "react";
import styles from "./AddTodo.module.css";

export function AddTodo({ addTodo} : { addTodo: (name : string) => void }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event : KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') { 
      if(inputValue.length === 0) return;
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
  <div className={styles.addTodo}>
    <input type="text" className={styles.todoInput} name="todoLabel" placeholder="enter todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
    <button className={styles.addTodoButton} type="submit" onClick={() => {
      if(inputValue.length === 0) return;
      addTodo(inputValue);
      setInputValue("");
    }}>
      Add Todo
    </button>
  </div>
  );
}
