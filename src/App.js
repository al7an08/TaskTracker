import Header from "./components/Header"
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Call mom',
      day: 'Feb 6th at 11 AM',
      reminder: true
    },
    {
      id: 2,
      text: 'Relax for a couple of minutes',
      day: 'May 6th at 11 AM',
      reminder: true
    },
    {
      id: 3,
      text: 'Doctors appointment',
      day: 'Feb 6th at 11 AM',
      reminder: false
    }
  ])

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('Task deleted with id: ' + id)
  }


  //Toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log('task remind properety changed to the opposite, id: ' + id)
  }

  return (
    <div className="container">
      <Header />
      <AddTask></AddTask>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  )
}

export default App;
