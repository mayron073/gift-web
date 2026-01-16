import { moments } from "../data/moments"
import "../styles/moments.css"
import Background from "../components/Background.jsx"

export default function Moments() {
  return (
    <>
    <Background image="/AyC.jpg" />
    <section>
      <h2>Reminisencias para la eternidad</h2>
      <div className="moments-grid">
        {moments.map(m => (
        <div key={m.id} className="moment-card">
          <h3>{m.title}</h3>
          <img src={m.image} alt={m.title} />
          <p>{m.description}</p>
        </div>
      ))}
    </div>
    </section>
    </>
  )
}
