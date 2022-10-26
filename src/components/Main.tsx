import { useState } from "react";
import { todoItem } from "../types";
import styles from "./Main.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Main() {
  const [todoList, setTodoList] = useState<todoItem[]>([]);

  function handleCompleteTask(todoIndexToUpdate: number) {
    const todoListUpdated = [...todoList];
    todoListUpdated[todoIndexToUpdate].completed = true;

    setTodoList(todoListUpdated);
  }

  function handleDeleteTask(todoIndexToDelete: number) {
    const todoListUpdated = [...todoList];
    todoListUpdated.splice(todoIndexToDelete, 1);

    setTodoList(todoListUpdated);
  }

  return (
    <main className={styles.main}>
      <TodoForm setTodoList={setTodoList} />
      <TodoList
        todoList={todoList}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default Main;
