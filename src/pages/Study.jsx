import CalculatorSlider from "../study/components/CalculatorSlider.jsx";
import KnowledgeSection from "../components/KnowledgeSection";
import ExerciseLab from "../components/ExerciseLab.jsx";
import Background from "../components/Background.jsx"
import "../styles/studys.css"

export default function Study() {
  return (
    <>
    <Background image="/AyC.jpg" />
    <section className="study">
      
      {/* Encabezado */}
      <header className="study-header">
        <h2>Estudio Eléctrico</h2>
      </header>

      {/* Calculadoras (NO SE TOCAN) */}
      <div className="calculator-center">
        <CalculatorSlider />
      </div>

      {/* Base de conocimiento */}
      <KnowledgeSection />

      {/* Banco de ejercicios */}
      <ExerciseLab />

    </section>
    </>
  );
}
