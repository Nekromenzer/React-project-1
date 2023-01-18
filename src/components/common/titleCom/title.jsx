import React from 'react'
import './title.css'

function Title ({ title, noHr, textAlign }) {
  return (
    <div className='projectContent'>
      <h1 style={{ textAlign: textAlign ? textAlign : 'center' }}> {title} </h1>
      {!noHr && <hr />}
    </div>
  )
}

export default Title
