import React from 'react'
import './card.css'
import Title from '../common/titleCom/title'

function Card ({ title, imageUrl, description }) {
  return (
    // parent
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='project' />
      </div>

      <div className='details'>
        <Title noHr title={title} textLeft />
        <div className='card-description'>
          <p>{description}</p>
        </div>
        {/* use common btn */}
        <div>Button</div>
      </div>
    </div>
  )
}

export default Card
