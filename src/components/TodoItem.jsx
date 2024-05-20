const TodoItem = ({ todo, setTodos }) => {
  const { id, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, isDone: !isDone } : t))
    );
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={toggleTodo}>{isDone ? "Done" : "Working"}</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
