// Exercise 1: Arrays & Objects

interface Todo {
  title: string;
  id: string;
  completed: boolean;
  createdAt: Date;

}

export function createTodo( newTitle: string ): Todo {
  return {
    title: newTitle,
    id: String(Math.random()),
    completed: false,
    createdAt: new Date(),
  };
}

export function addTodo(todoList : Array<Todo>, newTodo : Todo){
    let newTodoList : Array<Todo> = todoList.slice();
    newTodoList.push(newTodo);
    return newTodoList;
}

export function removeTodo(todoList: Array<Todo>, id: string){
    let newTodoList: Array<Todo> = todoList.filter((todo) => todo.id !== id);
    return newTodoList;
}

export function toggleTodo(todoList: Array<Todo>, id: string){
    return todoList.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}

export function getCompletedTodos(todoList : Array<Todo>){
    return todoList.filter((todo) => todo.completed === true);
}

export function getPendingTodos(todoList : Array<Todo>){
    return todoList.filter((todo) => todo.completed === false);
}

// Exercise 2: Strings & Callbacks
// Exercise 3: Promises & Async
//
// Implement your utility functions here.
// See the exercises/ folder for instructions and run `npm test` to verify.
