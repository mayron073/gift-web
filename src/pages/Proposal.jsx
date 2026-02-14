import { useState } from "react"
import "../styles/proposal.css"

export default function Proposal() {

  const [active, setActive] = useState(false)

  const [accepted, setAccepted] = useState(false)

  function handleAccept(e) {

    e.stopPropagation()

    setAccepted(true)
  }

  function closeCard() {

    setActive(false)
  }

  return (

    <section className="proposal-section">

      {active && (
        <div
          className="proposal-overlay"
          onClick={closeCard}
        />
      )}

      <div className="proposal-container">

        <article
          className={`proposal-card ${active ? "active" : ""}`}
          onClick={() => setActive(true)}
        >

          <h2 className="proposal-title">
            Las vacas, terneros y gallinas que pida tu mamá por tu mano las pagaré después de que aceptes.
          </h2>

          <div className="proposal-content">

            <p>
              Raiza Jocabeth,
              {"\n"}
              desde que estás en mi vida, tu presencia se ha sentido como un lugar seguro.
              {"\n"}
              Admiro tu belleza con los ojos de un bebé encariñado.
              Aprendo de tu fuerza y libertad al hablar.
              Disfruto escucharte (me entró arena en los ojos), tomarte de la mano, besarte,
              observar las nebulosas que habitan en tus ojos,
              ser de ayuda para ti…
              sentir cómo la piel se me eriza cuando me explicas cosas.
              {"\n"}
              Disfruto darte amor.
              {"\n"}
              Soy mejor persona gracias a ti,
              y prometo ser fiel a las consecuencias que tu ser provoca en el mío.
              {"\n"}
              Te escucharé.
              No intentaré arreglarte.
              Prometo estar.
              Prometo ser alguien digno de observar tus sonrisas.
              {"\n"}
              Porque hemos pasado por tanto…
              y tanto…
              que somos los más imperfectos,
              {"\n"}
              pero somos perfectos el uno para el otro.
              {"\n"}
              Hasta ahora,
              y por el tiempo que quieras estar junto a mí,
              {"\n"}
              prometo valorar y respetar todo lo que viene con el nombre
              {"\n"}
              <strong>RAIZA JOCABETH ARRIETA PEREZ.</strong>
              {"\n"}
              Cásate conmigo, luz de mis ojos.
              {"\n"}
              (nuevamente)
            </p>


            {/* BOTÓN visible solo si NO ha aceptado */}
            {!accepted && active && (

              <button
                className="proposal-accept-btn"
                onClick={handleAccept}
              >
                Aceptar esta promesa 💍
              </button>

            )}


            {/* MENSAJE visible solo después de aceptar */}
            {accepted && (

              <div className="proposal-response">
                Comenzaré a negociar el número de vacas y terneros con tu mamá 🐄✨
              </div>

            )}

          </div>


          {!active && (

            <span className="proposal-readmore">
              Abrir ✨
            </span>

          )}

        </article>

      </div>

    </section>
  )
}
