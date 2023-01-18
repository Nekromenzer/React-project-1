import React from 'react'
import './title.css'

function Title ({ title, noHr, textLeft }) {
  return (
    <div className='projectContent'>
      <h1 style={{ textAlign: textLeft ? 'left' : 'center' }}> {title} </h1>
      {!noHr && <hr />}
    </div>
  )
}

export default Title
