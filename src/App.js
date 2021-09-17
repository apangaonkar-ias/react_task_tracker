import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Visit Market',
            day: '30 Sept at 5:30pm',
            reminder: false,
        },
        {
            id:2,
            text: 'Dance class',
            day: '1 Sept at 7:00pm',
            reminder: true,
        },
        {
            id:3,
            text: 'Swimming',
            day: '3 Sept at 12:00pm',
            reminder: true,
        },
    ]
)

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) +1
  const newTask = {id,...task}
  setTasks(...tasks,newTask)
}


//Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}

//Toggle Reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task, reminder: !task.reminder } : task //ternary operation
    )
  )
}


  return (
    <div className='container'>
      <Header onAdd = {() => setShowAddTask 
        (!showAddTask) }  />
      
      {showAddTask && <AddTask onAdd = {addTask} />}

      {tasks.length>0 ? <Tasks tasks = {tasks} 
      onDelete ={deleteTask} 
      onToggle = {toggleReminder}/> : ('No Incomplete Tasks')}
    </div>
  );
}

export default App;

