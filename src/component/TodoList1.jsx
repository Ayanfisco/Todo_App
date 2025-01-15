import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList1({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div>
      {sortedTodos.map((item) => (
        <TodoItem
          item={item}
          todos={todos}
          setTodos={setTodos}
          key={item.name}
        />
      ))}
    </div>
  );
}
