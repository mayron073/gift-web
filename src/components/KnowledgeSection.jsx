import { knowledge } from "../study/theory/knowledge.js"
import "../styles/KnowledgeSection.css";

export default function KnowledgeSection() {
  return (
    <section className="knowledge">
      <h2>Base de conocimiento 📖​</h2>

      {knowledge.map((topic) => (
        <article key={topic.id} className="knowledge-topic">
          
          <header className="topic-header">
            <span className="topic-icon">{topic.icon}</span>
            <h3>{topic.title}</h3>
          </header>

          <div className="topic-content">
            {topic.sections.map((section, index) => (
              <details key={index} className="knowledge-card">
                <summary>{section.name}</summary>

                <div className="knowledge-body">
                  
                  {section.definition && (
                    <p className="definition">
                      <strong>Definición:</strong> {section.definition}
                    </p>
                  )}

                  {section.explanation && (
                    <p>{section.explanation}</p>
                  )}

                  {section.details && (
                    <ul>
                      {section.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}

                  {section.steps && (
                    <ol>
                      {section.steps.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                  )}

                  {section.types && (
                    <ul>
                      {section.types.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  )}

                  {section.connections && (
                    <p>
                      <strong>Conexiones:</strong>{" "}
                      {section.connections.join(" / ")}
                    </p>
                  )}

                  {section.formulas && (
                    <div className="formulas">
                      {section.formulas.map((f, i) => (
                        <code key={i}>{f}</code>
                      ))}
                    </div>
                  )}

                  {section.notes && (
                    <p className="notes">📌 {section.notes}</p>
                  )}

                </div>
              </details>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
