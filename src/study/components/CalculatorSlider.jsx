import { useState } from "react"
import OhmCalculator from "../calculators/OhmCalculator.jsx"
import PowerTriangle from "../calculators/PowerTriangle.jsx"
import VoltageDrop from "../calculators/VoltageDrop.jsx"
import CapacitorMotor from "../calculators/CapacitorMotor.jsx"

const calculators = [
  { name: "Ley de Ohm", component: <OhmCalculator /> },
  { name: "Triángulo de Potencias", component: <PowerTriangle /> },
  { name: "Regulación de tensión", component: <VoltageDrop /> },
  { name: "Capacitor para Motor", component: <CapacitorMotor /> }
]

export default function CalculatorSlider() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % calculators.length)
  const prev = () =>
    setIndex((index - 1 + calculators.length) % calculators.length)

  return (
    <div className="calculator-card">
      <header>
        <button onClick={prev}>◀</button>
        <h3>{calculators[index].name}</h3>
        <button onClick={next}>▶</button>
      </header>

      <div className="calculator-content">
        {calculators[index].component}
      </div>
    </div>
  )
}
