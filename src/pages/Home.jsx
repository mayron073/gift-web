import "../styles/home.css"
import {go} from "../data/go-go"
import Background from "../components/Background.jsx"
import bg from "/AyC.jpg";

export default function Home() {
  return (
    <>
    {/*<Background image={bg} />*/}
    <section className="home">
      <div>
        <h1>Este espacio es para ti</h1>
        <p>
          Tu fuego es sempiterno. <br />
          Tu belleza inmarcesible. <br />
          Tu carisma, un deleite. <br />
          Tu esencia indeleble.
        </p>       
      </div>
    
      <img src={go.image} alt={go.titulo} />
    </section>
    </>
  )
}
