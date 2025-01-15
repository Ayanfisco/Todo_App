import { useState } from "react";
import styles from "./field.module.css";

export default function Field({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [error, setError] = useState(""); // State to store error message

  function handleSubmit(e) {
    e.preventDefault();

    // Check if the todo item already exists or if the input is empty
    if (todo.name === "") {
      setError("Input is empty");
    } else if (todos.some((existingTodo) => existingTodo.name === todo.name)) {
      setError("Todo already exists");
    } else {
      setTodos([...todos, todo]);
      setError(""); // Clear error if item is added successfully
      setTodo({ name: "", done: false }); // Clear input field
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.modernfield}>
        <div className={styles.moderncontainer}>
          <input
            placeholder="Enter Item Here"
            className={styles.moderninput}
            type="text"
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button className={styles.modernbutton} type="submit">
            Add
          </button>
        </div>
      </form>
      {error && (
        <p className={styles.error} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}
