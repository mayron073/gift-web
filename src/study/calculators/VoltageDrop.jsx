import { useState } from "react"

export default function VoltageDrop() {
  const [l, setL] = useState("")
  const [i, setI] = useState("")
  const [r, setR] = useState("")
  const [v, setV] = useState("")

  const dv = l && i && r && v
    ? ((2 * l * i * (r/1000) )/ v * 100).toFixed(2)
    : ""

  return (
    <>
      <label>Longitud (m)</label>
      <input value={l} onChange={e => setL(e.target.value)} />

      <label>Corriente (A)</label>
      <input value={i} onChange={e => setI(e.target.value)} />

      <label>Resistencia del conductor (Ω/km)</label>
      <input value={r} onChange={e => setR(e.target.value)} />

      <label>Tesnión nominal (V)</label>
      <input value={v} onChange={e => setV(e.target.value)} />

      {dv && (
        <p>
          % Regulación = <strong>{dv}%</strong><br />
          {dv <= 3 ? "✔️ Cumple" : "⚠️ No cumple"}
        </p>
      )}
    </>
  )
}
