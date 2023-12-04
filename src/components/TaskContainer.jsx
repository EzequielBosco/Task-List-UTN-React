import { useState } from 'react'
import TaskList from './TaskList'

const TaskContainer = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Tarea 1', date: new Date() },
    { id: 2, name: 'Tarea 2', date: new Date() }
  ])

  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const handleClick = () => {
    console.log(`¡Gracias por su compra!`)
    setPurchaseComplete(true)
    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  return (
    <div>
      {!purchaseComplete ? (
          <TaskList tasks={tasks} onClick={handleClick} />
        ) : (
          <p>¡Gracias por su compra!</p>
      )}
    </div>
  )
}

export default TaskContainer