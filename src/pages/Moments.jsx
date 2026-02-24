import { moments } from "../data/moments"
import "../styles/moments.css"

export default function Moments() {
  return (
    <>
    {/*<Background image={bg} />*/}
    <section className="moments">
      <h2>Reminisencias para la eternidad</h2>
      <div className="moments-grid">
        {moments.map(m => (
        <div key={m.id} className="moment-card">
          <h3>{m.title}</h3>
          <img src={m.image} alt={m.title} className="img-card"/>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
    </section>
    </>
  )
}
