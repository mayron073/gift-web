import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Moments from "./pages/Moments"
import Writings from "./pages/Writings"
import Study from "./pages/Study"
import Checklist from "./pages/Checklist"
import Quotes from "./pages/Quotes"
import Navbar from "./components/Navbar"
import { useChecklist } from "./hooks/useChecklist.js"

export default function App() {
  const checklist = useChecklist()

  return (
    <>
      <Navbar />

      <main>
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
    </>
  )
}


