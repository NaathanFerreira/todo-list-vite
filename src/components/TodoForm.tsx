import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./TodoForm.module.css";
import { GrAddCircle } from "react-icons/gr";
import { todoItem } from "../types";

interface TodoFormProps {
  setTodoList: React.Dispatch<React.SetStateAction<todoItem[]>>;
}

function TodoForm({ setTodoList }: TodoFormProps) {
  const [task, setTask] = useState("");

  function handleAddNewTodo(event: FormEvent) {
    event.preventDefault();

    if (!task) {
      return;
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        task,
        completed: false,
      },
    ]);
    setTask("");
  }

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleAddNewTodo}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        className={styles.input}
        value={task}
        onChange={handleTaskChange}
      />
      <button className={styles.button}>
        Criar <GrAddCircle className={styles.icon} color="white" />
      </button>
    </form>
  );
}

export default TodoForm;
