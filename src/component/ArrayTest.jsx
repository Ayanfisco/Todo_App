import React from "react";

export default function ArrayTest() {
  const Fruits = ["one", "two", "three"];
  return (
    <div>
      {Fruits.map((fruit) => (
        <div>{fruit}</div>
      ))}
      pop
    </div>
  );
}
