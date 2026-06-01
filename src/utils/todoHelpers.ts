// Exercise 1: Arrays & Objects

interface Todo {
  title: string;
  id: string;
  completed: boolean;
  createdAt: Date;
}

export function createTodo(newTitle: string): Todo {
  return {
    title: newTitle,
    id: String(Math.random()),
    completed: false,
    createdAt: new Date(),
  };
}

export function addTodo(todoList: Array<Todo>, newTodo: Todo) {
  const newTodoList: Array<Todo> = todoList.slice();
  newTodoList.push(newTodo);
  return newTodoList;
}

export function removeTodo(todoList: Array<Todo>, id: string) {
  const newTodoList: Array<Todo> = todoList.filter((todo) => todo.id !== id);
  return newTodoList;
}

export function toggleTodo(todoList: Array<Todo>, id: string) {
  return todoList.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
}

export function getCompletedTodos(todoList: Array<Todo>) {
  return todoList.filter((todo) => todo.completed === true);
}

export function getPendingTodos(todoList: Array<Todo>) {
  return todoList.filter((todo) => todo.completed === false);
}

// Exercise 2: Strings & Callbacks

export function filterTodos(
  todoList: Array<Todo>,
  predicate: (todo: Todo) => boolean,
) {
  return todoList.filter(predicate);
}

export function searchTodos(todoList: Array<Todo>, query: string) {
  const newTodoList: Array<Todo> = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase()),
  );
  if (newTodoList.length < 1) {
    return todoList;
  }
  return newTodoList;
}

export function formatTodoTitle(titleString: string) {
  const newString = titleString.trimEnd().trimStart();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
}

// Exercise 3: Promises & Async

export function fakeFetchTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todoList: Todo[] = [
        createTodo("do laundry"),
        createTodo("get grocceries"),
        createTodo("walk dogs"),
      ];
      resolve(todoList);
    }, 500);
  });
}

export function fakeSaveTodo(todo: Todo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todo);
    }, 500);
  });
}
