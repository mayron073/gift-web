import { useEffect, useState } from "react"

const STORAGE_KEY = "gift_checklist_v1"

const load = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function useChecklist() {
  const [tasks, setTasks] = useState(load)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = text =>
    setTasks(t => [...t, { id: crypto.randomUUID(), text, done: false }])

  const toggleTask = id =>
    setTasks(t =>
      t.map(x => (x.id === id ? { ...x, done: !x.done } : x))
    )

  const removeCompleted = () =>
    setTasks(t => t.filter(x => !x.done))

  return { tasks, addTask, toggleTask, removeCompleted }
}

