import React from 'react'
import './title.css'

function Title ({ title, noHr, textAlign }) {
  const [color, setColor] = React.useState(false)
  const screenSize = 'mobile'
  return (
    <div
    className={`projectContent ${screenSize === 'mobile' ? 'text-bg' : ''}`}
      onClick={() => setColor(!color)}
    >
      <h1 style={{ textAlign: textAlign ? textAlign : 'center' }}> {title} </h1>
      {!noHr && <hr />}
    </div>
  )
}

export default Title
