/*import "../styles/background.css"

export default function Background({ image }) {
  return (
    <div
      className="background-layer"
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}
*/

import "../styles/background.css"

export default function Background({ bg, bgv }) {
  return (
    <div className="background-layer">
      <picture>
        <source
          media="(max-width: 600px) and (orientation: portrait)"
          srcSet={bgv}
        />
        <img
          src={bg}
          alt=""
          className="background-image"
        />
      </picture>
    </div>
  )
}
