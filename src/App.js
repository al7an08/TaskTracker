import Header from "./components/Header"
import Tasks from './components/Tasks'
import { useState } from "react"


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



  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
