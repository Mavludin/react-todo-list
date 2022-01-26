import React, { useState } from "react";
import styles from "./AddForm.module.css";
import { notification } from "antd";

export const AddForm = ({ addItem, todoList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoList.length === 10) {
      notification.warning({
        message: "Внимание!",
        description: "Достигнуто максимальное количество элементов в списке.",
      });
      return false;
    }

    const newToDo = {
      id: todoList.length + 1,
      title: inputValue,
    };

    addItem(newToDo);
    setInputValue("");
  };

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        required
        type="text"
        placeholder="Новый элемент списка"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
