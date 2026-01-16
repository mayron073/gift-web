import { writings } from "../data/writings"
import "../styles/writings.css"
import Background from "../components/Background.jsx"

import { useState } from "react"

export default function Writings() {
  const [activeId, setActiveId] = useState(null)

  return (
    <>
    <Background image="/AyC.jpg" />
    <section className="writings-section">
      <h2>Inspirados en una belleza poderosa</h2>
      {activeId && (
        <div
          className="overlay"
          onClick={() => setActiveId(null)}
        />
      )}

      <div className="writings-grid">
        {writings.map(w => {
          const isActive = activeId === w.id

          return (
            <article
              key={w.id}
              className={`writing-card ${isActive ? "active" : ""}`}
              onClick={() => setActiveId(w.id)}
            >
              <h3>{w.title}</h3>

              <p className="writing-text">
                {w.text}
              </p >

              {!isActive && (
                <span className="read-more">
                  Leer más 📖
                </span>
              )}
            </article>
          )
        })}
      </div>
    </section>
    </>
  )
}



/*
export default function Writings() {
  return (
    <>
    <Background image="/AyC.jpg" />
    <section>
      <h2>Inspirados en una belleza poderosa</h2>
      <div className="box" >
        {writings.map(w => (
        <article key={w.id} className="writing">
          <h3>{w.title}</h3>
          {w.text.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </article>
      ))}
      </div>
    </section>
    </>
  )
}
*/