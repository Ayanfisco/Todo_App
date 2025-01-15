import React from "react";
import styles from "./todoItem.module.css";

export default function TodoItem({ todos, setTodos, item }) {
  function handleDelete(item) {
    console.log("DeleteButton Clicked " + item.name);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const dones = item.done ? styles.completed : "";
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <div className={styles.itemname}>
          <span className={dones} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deletebutton}
            >
              x
            </button>
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
}
