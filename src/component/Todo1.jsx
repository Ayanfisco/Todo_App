import { useState } from "react";
import Field from "./Field";
import TodoList1 from "./TodoList1";
import Footer from "./Footer";

export default function Todo1() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Field todos={todos} setTodos={setTodos} />
      <TodoList1 todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
