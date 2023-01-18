import React from 'react'
import './card.css'
import Title from '../common/titleCom/title'

function Card ({ title, imageUrl, description, order }) {
  return (
    // comment by heshan
    // parent
    // test comment
    <div
      className='card-container'
      style={{ flexDirection: order ? 'row-reverse' : 'row' }}
    >
      <div className='image-container'>
        <img
          src={imageUrl}
          alt='project'
          style={
            order
              ? { borderRadius: '0px 24px 24px 0px' }
              : { borderRadius: '24px 0px 0px 24px' }
          }
        />
      </div>

      <div
        className='details'
        style={order ? { paddingRight: '2rem' } : { paddingLeft: '2rem' }}
      >
        <Title noHr title={title} textAlign={!order ? 'left' : 'right'} />
        <div className='card-description'>
          <p style={{ textAlign: !order ? 'start' : 'end' }}>{description}</p>
        </div>
        {/* use common btn */}
        <div
          style={{
            width: '200px',
            border: '1px solid red',
            borderRadius: '25px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: order ? 'auto' : '0px'
          }}
        >
          Button
        </div>
      </div>
    </div>
  )
}

export default Card
