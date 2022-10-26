import { todoItem } from "../types";
import {
  MdRadioButtonUnchecked,
  MdOutlineCheckCircleOutline,
  MdDelete,
} from "react-icons/md";
import styles from "./TodoCard.module.css";

interface TodoCardProps {
  todo: todoItem;
  handleCompleteTask: () => void;
  handleDeleteTask: () => void;
}

function TodoCard({
  todo,
  handleCompleteTask,
  handleDeleteTask,
}: TodoCardProps) {
  const isTaskCompleted = todo.completed;

  return (
    <div
      className={`${styles.card} ${isTaskCompleted && styles.completedTask}`}
    >
      {todo.completed ? (
        <MdOutlineCheckCircleOutline className={styles.checkBtn} />
      ) : (
        <MdRadioButtonUnchecked
          className={styles.uncheckBtn}
          onClick={handleCompleteTask}
        />
      )}
      <p>{todo.task}</p>
      <MdDelete onClick={handleDeleteTask} />
    </div>
  );
}

export default TodoCard;
