import React from "react";
import { Task  } from "./Types";

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete}) => {
  return(
    <li className={ task.done ? 'done':'' }>
      <label>
        <input className="checkbox-input" type="checkbox" onClick={() => handleDone(task)} defaultChecked={task.done} />
        <span className="checkbox-label">{ task.title }</span>
      </label>
      <button className="delete-btn" onClick={ () => handleDelete(task)}>削除</button>
    </li>
  )
}

export default TaskItem