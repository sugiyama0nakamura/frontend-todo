import React,{ useState } from 'react'
import './App.css';
import { Task } from './todo/sample/Types'
import TaskInput from './todo/sample/TaskInput'
import TaskList from './todo/sample/TaskList'



const initialState: Task[] = [
  {
    id: 2,
    title: 'Hello World',
    done: false
  },
  {
    id: 1,
    title: 'Start React Todo App by TS',
    done: false
  }
]


const App:React.FC = () => {
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

export default App;