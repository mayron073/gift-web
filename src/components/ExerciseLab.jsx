import { useState } from "react";
import { exercisesBank } from "../data/exercisesBank";
import "../styles/ExerciseLab.css";

export default function ExerciseLab() {
  const [exercise, setExercise] = useState(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const generate = (type) => {
    const ex = exercisesBank[type].generator();
    setExercise(ex);
    setInput("");
    setResult(null);
  };

  const check = () => {
    if (!exercise) return;

    // Si el ejercicio trae función check (numérico o texto)
    if (typeof exercise.check === "function") {
      const value = isNaN(input) ? input : Number(input);
      const isCorrect = exercise.check(value);
      setResult(isCorrect);
    } else {
      // Compatibilidad con bancos antiguos
      setResult(input.toString().trim() === exercise.answer);
    }
  };

  return (
    <section className="exercise-lab">
      <h2>Banco de pruebas</h2>

      <div className="lab-actions">
        {Object.entries(exercisesBank).map(([key, bank]) => (
          <button key={key} onClick={() => generate(key)}>
            {bank.title}
          </button>
        ))}
      </div>

      {exercise && (
        <div className="exercise-card">
          <p>{exercise.question}</p>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Respuesta ${exercise.unit ? `(${exercise.unit})` : ""}`}
          />

          <button onClick={check}>Verificar</button>

          {result !== null && (
            <span className={result ? "ok" : "fail"}>
              {result ? "Correcto 🎉" : "Intenta de nuevo 🔄"}
            </span>
          )}
        </div>
      )}
    </section>
  );
}
