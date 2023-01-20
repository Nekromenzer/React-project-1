import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Modelyn Torfy</h3>
      <div className="icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        </div>  
      <ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
