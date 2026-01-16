import { useState } from "react"
import "../styles/checklist.css"
import Background from "../components/Background.jsx"

export default function Checklist({
  tasks,
  addTask,
  toggleTask,
  removeCompleted
}) {
  const [text, setText] = useState("")

  const submit = () => {
    if (!text.trim()) return
    addTask(text)
    setText("")
  }

  return (
    <>
    <Background image="/AyC.jpg" />
    <section className="checklist">
      <h2>Checklist</h2>

      <div className="checklist-input">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Nueva tarea…"
        />
        <button onClick={submit}>Agregar</button>
      </div>

      <ul>
        {tasks.map(task => (
        <li
          key={task.id}
          className={`task ${task.done ? "done" : ""}`}
        >
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className="checkmark" />
            <span className="text">{task.text}</span>
            {task.done && <span className="emoji">✨</span>}
          </label>
        </li>
        ))}
      </ul>

      {tasks.some(t => t.done) && (
        <button onClick={removeCompleted}>
          Eliminar completadas
        </button>
      )}
    </section>
    </>
  )
}