import { todoItem } from "../types";
import TodoCard from "./TodoCard";
import styles from "./TodoList.module.css";
import { FaClipboardList } from "react-icons/fa";

interface TodoListProps {
  todoList: todoItem[];
  handleCompleteTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
}

function TodoList({
  todoList,
  handleCompleteTask,
  handleDeleteTask,
}: TodoListProps) {
  const totalNumberOfTasks = todoList.length;
  const numberOfCompletedTasks = todoList.reduce((ac, task) => {
    return task.completed ? ++ac : ac;
  }, 0);

  return (
    <>
      <div className={styles.todoInfos}>
        <span>
          Tarefas criadas{" "}
          <span className={styles.counter}>{totalNumberOfTasks}</span>
        </span>
        <span>
          Tarefas concluidas{" "}
          <span className={styles.counter}>{numberOfCompletedTasks}</span>
        </span>
      </div>
      <hr />
      {todoList.length <= 0 ? (
        <div className={styles.emptyTask}>
          <FaClipboardList />
          <h5>Você aidna não tem tarefas cadastradas</h5>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        todoList.map((todo, index) => (
          <TodoCard
            todo={todo}
            handleCompleteTask={() => handleCompleteTask(index)}
            handleDeleteTask={() => handleDeleteTask(index)}
          />
        ))
      )}
    </>
  );
}

export default TodoList;
