import React,{ useState } from 'react'
import { Task } from './Types'
import TaskInput from './TaskInput'
import TaskList from './TaskList'



const initialState: Task[] = [
]


const Sample = () => {
const [tasks, setTasks] = useState(initialState)
  return (
    <div className="todo-container">
      <div className="todo-component">
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  );
}

export default Sample;