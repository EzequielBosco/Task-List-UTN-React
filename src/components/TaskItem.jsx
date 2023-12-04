import { useEffect, useState } from "react"
import "./task.css"

const TaskItem = ({ id, name, date, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed !== undefined ? completed : false)

  useEffect(() => {
    const storedCompleted = localStorage.getItem(`task_${id}_completed`)
    if (storedCompleted !== null) {
      setIsCompleted(JSON.parse(storedCompleted))
    }
  }, [id])

  const toggleTaskCompletion = () => {
    const newCompleted = !isCompleted
    setIsCompleted(newCompleted)

    localStorage.setItem(`task_${id}_completed`, JSON.stringify(newCompleted))
  }

  const realDate = date.toLocaleDateString()

  return (
    <div className="card-task">
      <div className="task-info">
        <h3>{id}</h3>
        <h2 className="task-name">{name}</h2>
        <p>Fecha: {realDate}</p>
        <div>
          <span className="card-completed">{ isCompleted ? "Completada" : "Pendiente" } </span>
          <input type="checkbox" onChange={toggleTaskCompletion} checked={isCompleted}/>
        </div>      
        <button>Borrar</button>
      </div>
    </div>
  )
}

export default TaskItem