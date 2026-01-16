import { useState } from "react";
import { quotes } from "../data/quotes.js";
import "../styles/quotes.css";

export default function BiblicalQuotes() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const randomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const quote = quotes[index];

  return (
    <section className="biblical-quotes">
      <h2>Palabras que sostienen 🤍</h2>

      <div className="quote-card">
        <p className="quote-text">“{quote.text}”</p>
        <span className="quote-ref">{quote.reference}</span>
      </div>

      <div className="quote-actions">
        <button onClick={nextQuote}>Siguiente ➡️​</button>
        <button onClick={randomQuote}>Sorpréndeme ✨</button>
      </div>
    </section>
  );
}
