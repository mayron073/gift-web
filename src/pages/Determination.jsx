import "../styles/determination.css"
import denji from "../assets/denji.jpeg"
import reze from "../assets/reze.jpg"
import us from "../assets/2nov25.jpg"
import jlog from "/AlgoSeEnciende.mp3"
import { useRef, useState, useEffect } from "react"

export default function Determination() {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  function togglePlay(e) {

    e.stopPropagation()

    if (!audioRef.current) return

    if (isPlaying) {

      audioRef.current.pause()

    } else {

      audioRef.current.play()

    }

    setIsPlaying(!isPlaying)
  }

  function handleTimeUpdate() {

    const current = audioRef.current.currentTime
    const total = audioRef.current.duration

    setProgress((current / total) * 100)
  }

  function handleSeek(e) {

    const percent = e.target.value

    const time = (percent / 100) * audioRef.current.duration

    audioRef.current.currentTime = time

    setProgress(percent)
  }

  function handleLoadedMetadata() {

    setDuration(audioRef.current.duration)
  }

  return (

    <section className="determination-section">
      <div className="determination-wrapper">
        
        {/* 🎧 TARJETA MUSICAL */}
        <div className="music-card">

          <h2 className="music-title">
            Para ti, amor mío
          </h2>

          <audio
            ref={audioRef}
            src={jlog}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="music-controls">

            <button
              className="play-btn"
              onClick={togglePlay}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <input
              type="range"
              className="progress-bar"
              value={progress}
              onChange={handleSeek}
              min="0"
              max="100"
            />

          </div>
        </div>

        <div className="determination-container determination-images">

          <div className="manga-top">
            <img src={reze} className="img img-denji"/>
            <img src={denji} className="img img-reze"/>
          </div>

          <div className="manga-bottom">
            <img src={us} className="img img-us"/>
          </div>

        </div>

        <div className="determination-container">

          <h1 className="determination-title">
            Determinación
          </h1>

          <div className="determination-text">

            <p>
              La RAE dice: determinar es decidir algo.
            </p>

            <p>
              Pero no te ha visto levantarte en silencio, no ha visto la dedicación
              aferrada a tus manos, ni la responsabilidad caminando a tu lado como
              sombra fiel.
            </p>

            <p>
              Tu determinación tiene fuerza, no la que irrumpe, sino la que permanece, es una presencia indomable.
              Tiene una inteligencia que ordena el mundo sin herirlo.
              Y también tiene esas ganas de ganar plata,
              porque sí, porque también la felicidad necesita forma tangible.
            </p>

            <p>
              Y debo decirlo, porque sería un acto de negligencia estética no hacerlo:
              te ves muy hermosa cuando trabajas.
              Hay algo en tu expresión, en la precisión de tus gestos,
              algo que es solo tuyo, es un instante enmarcado para la eternidad, es tu fuego sempiterno.
            </p>

            <p className="determination-closing">
              En tus ojos,<br/>
              arde una decisión que no se apaga.
            </p>

          </div>

        </div>
      </div>
    </section>

  )
}
