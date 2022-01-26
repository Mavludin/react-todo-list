import React, { useState } from "react";
import { defaultList } from "../../shared/data";
import { AddForm } from "./AddForm/AddForm";
import { TodoList } from "./TodoList/TodoList";

export const AppView = () => {
  const cashedList = JSON.parse(localStorage.getItem("todoList"));

  const [todoList, setTodoList] = useState(cashedList || defaultList);

  const updateTodoList = (updatedList) => {
    localStorage.setItem("todoList", JSON.stringify(updatedList));
    setTodoList(updatedList);
  };

  const deleteItem = (todo) => {
    const updatedList = [...todoList].filter((item) => item.id !== todo.id);
    updateTodoList(updatedList);
  };

  const addItem = (newToDo) => {
    const updatedList = [...todoList, newToDo];
    updateTodoList(updatedList);
  };

  return (
    <main>
      <h1>Список задач</h1>
      <AddForm addItem={addItem} todoList={todoList} />
      <TodoList deleteItem={deleteItem} todoList={todoList} />
    </main>
  );
};
