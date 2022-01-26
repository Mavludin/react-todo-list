import React from "react";
import { List, Divider, Alert } from "antd";
import styles from "./TodoList.module.css";
import { DeleteFilled } from "@ant-design/icons";

export const TodoList = ({ deleteItem, todoList }) => {
  return (
    <section className={styles.todoList}>
      <Divider orientation="left">Задачи</Divider>
      {!todoList.length ? (
        <Alert
          message="Список задач пуст!"
          description="Добавьте новую задачу."
          type="info"
          showIcon
        />
      ) : (
        <List
          size="small"
          bordered
          className={styles.content}
          dataSource={todoList}
          renderItem={(todo) => (
            <List.Item
              actions={[
                <DeleteFilled
                  className={styles.deleteBtn}
                  onClick={() => deleteItem(todo)}
                />,
              ]}
            >
              {todo.title}
            </List.Item>
          )}
        />
      )}
    </section>
  );
};
