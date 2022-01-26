import React from "react";
import { List, Divider, Alert, Modal } from "antd";
import styles from "./TodoList.module.css";
import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export const TodoList = ({ deleteItem, todoList }) => {

  const handleItemDeletion = (todo) => {

    confirm({
      title: 'Вы уверены, что хотите удалить данный элемент?',
      icon: <ExclamationCircleOutlined />,
      content: 'Изменения невозможно будет вернуть.',
      okType: 'danger',
      onOk() {
        deleteItem(todo);
      }
    });
  }

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
                  onClick={() => handleItemDeletion(todo)}
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
