import "../styles/background.css"

export default function Background({ image }) {
  return (
    <div
      className="background-layer"
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}
