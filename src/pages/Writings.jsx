import { writings } from "../data/writings"
import { useState, useEffect } from "react"
import "../styles/writings.css"
import Background from "../components/Background.jsx"
import bg from "/AyC.jpg"

export default function Writings() {
  const [activeId, setActiveId] = useState(null)

  const STORAGE_KEY = "favorite_writings"

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    setFavorites(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    )
  }

  return (
    <>
    {/*<Background image={bg} />*/}
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
              className={`writing-card 
                ${isActive ? "active" : ""} 
                ${favorites.includes(w.id) ? "favorite" : ""}
              `}
              onClick={() => setActiveId(w.id)}
            >
              <button
                className={`favorite-btn ${
                  favorites.includes(w.id) ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(w.id)
                }}
                aria-label="Marcar como favorito"
              >
                {favorites.includes(w.id) ? "❤️" : "🤍"}
              </button>
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
