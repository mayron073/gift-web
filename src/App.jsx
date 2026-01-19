import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Moments from "./pages/Moments"
import Writings from "./pages/Writings"
import Study from "./pages/Study"
import Checklist from "./pages/Checklist"
import Quotes from "./pages/Quotes"
import Navbar from "./components/Navbar"
import { useChecklist } from "./hooks/useChecklist.js"
import Background from "./components/Background.jsx";
import bg from "/AyC.jpg";

export default function App() {
  const checklist = useChecklist()

  return (
      <div className="viewport">
      <Background image={bg} />
      <div className="overlay" />

      <div className="app">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/momentos" element={<Moments />} />
            <Route path="/escritos" element={<Writings />} />
            <Route path="/estudio" element={<Study />} />
            <Route
            path="/checklist"
            element={<Checklist {...checklist} />}
          />
            <Route path="/citas" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

/*
    <div className="app-root">
      <Background image={bg} />
      <Navbar />

      <main className="scroll-container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/momentos" element={<Moments />} />
          <Route path="/escritos" element={<Writings />} />
          <Route path="/estudio" element={<Study />} />
          <Route
            path="/checklist"
            element={<Checklist {...checklist} />}
          />
          <Route path="/citas" element={<Quotes />} />
        </Routes>
      </main>
    </div>
*/

