import React from 'react'
import Title from '../common/titleCom/title'

const Project = () => {
  return (
    <div className='projects'>
      {/* title */}
      <Title title='Projects' />

      <div className='form'>
        <div className='inputs'>
          <label htmlFor=''>Name</label>
          <input type='text' />
        </div>

        <div className='inputs'>
          <label htmlFor=''>Email</label>
          <input type='text' />
        </div>

        <div className='inputs'>
          <label htmlFor=''>Message</label>
          <input className='Message' type='text' />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Project
