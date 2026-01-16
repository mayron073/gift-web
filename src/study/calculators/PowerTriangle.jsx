import { useState } from "react"

export default function PowerTriangle() {
  const [p, setP] = useState("")
  const [fp, setFp] = useState("")

  const s = p && fp ? (p / fp).toFixed(2) : ""
  const q = p && s ? Math.sqrt(s**2 - p**2).toFixed(2) : ""

  return (
    <>
      <label>Potencia activa P (W)</label>
      <input value={p} onChange={e => setP(e.target.value)} />

      <label>Factor de potencia</label>
      <input value={fp} onChange={e => setFp(e.target.value)} />

      {s && (
        <>
          <p>Potencia aparente S: <strong>{s} VA</strong></p>
          <p>Potencia reactiva Q: <strong>{q} VAR</strong></p>
          <p>FP = {fp} - Se exige ≥ 0.9</p>
        </>
      )}
    </>
  )
}
