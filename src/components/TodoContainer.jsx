import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  return (
    <section>
      <h1 className="todo-list-title">Todo List</h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList
        title="Working"
        todos={todos.filter((todo) => !todo.isDone)}
        setTodos={setTodos}
      />
      <TodoList
        title="Done"
        todos={todos.filter((todo) => todo.isDone)}
        setTodos={setTodos}
      />
    </section>
  );
};

export default TodoContainer;
