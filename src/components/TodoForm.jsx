import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim())
      return alert("Need Title and Content");

    const nextTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
