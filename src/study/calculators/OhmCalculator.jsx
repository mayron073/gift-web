import { useState } from "react"

export default function OhmCalculator() {
  const [v, setV] = useState("")
  const [i, setI] = useState("")

  const r = v && i ? (v / i).toFixed(2) : ""

  return (
    <>
      <label>Tensión (V)</label>
      <input value={v} onChange={e => setV(e.target.value)} />

      <label>Corriente (A)</label>
      <input value={i} onChange={e => setI(e.target.value)} />

      {r && <p>Resistencia: <strong>{r} Ω</strong></p>}
    </>
  )
}
