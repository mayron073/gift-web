import { useState } from "react"

export default function CapacitorMotor() {
  const [power, setPower] = useState("")
  const [unit, setUnit] = useState("W")
  const [efficiency, setEfficiency] = useState("")
  const [fp1, setFp1] = useState("")
  const [voltage, setVoltage] = useState("")

  const f = 60
  const fp2 = 0.9

  // Conversión de potencia
  const Ps = power
    ? unit === "HP"
      ? power * 746
      : Number(power)
    : 0

  const eta = efficiency ? efficiency / 100 : 0
  const Pe = Ps && eta ? Ps / eta : 0

  const phi1 = fp1 ? Math.acos(fp1) : 0
  const phi2 = Math.acos(fp2)

  const QL = Pe ? Pe * Math.tan(phi1) : 0
  const Q = Pe ? Pe * Math.tan(phi2) : 0

  const Qc = QL - Q

  const C =
    Qc > 0 && voltage
      ? ((Qc / (2 * Math.PI * f * voltage * voltage)) * 1e6).toFixed(2)
      : null

  return (
    <>
      <label>Potencia del motor</label>
      <div className="power-group">
        <input
          type="number"
          placeholder="Potencia"
          value={power}
          onChange={e => setPower(e.target.value)}
        />

        <select
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <option value="W">W</option>
          <option value="HP">HP</option>
        </select>
      </div>

      <label>Eficiencia (%)</label>
      <input
        type="number"
        value={efficiency}
        onChange={e => setEfficiency(e.target.value)}
      />

      <label>Factor de potencia inicial (FP₁)</label>
      <input
        type="number"
        step="0.01"
        value={fp1}
        onChange={e => setFp1(e.target.value)}
      />

      <label>Tensión (V)</label>
      <input
        type="number"
        value={voltage}
        onChange={e => setVoltage(e.target.value)}
      />

      {C && (
        <p>
          🔋​ Capacitor requerido: <strong>{C} µF</strong>
          <br />
        </p>
      )}
    </>
  )
}
