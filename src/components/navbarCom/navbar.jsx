import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Modelyn Torfy</h3>
      {/* <div className='icon'>
        <div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>

          <div className='mobile-menu'>
            <p>
              <a href='#'>About</a>
            </p>
            <p>
              <a href='#'>Projects</a>
            </p>
            <p>
              <a href='#'>Contact</a>
            </p>
          </div>
        </div>
      </div> */}
      <div className='dropdown'>
        <button className='dropbtn'>Dropdown</button>
        <div className='dropdown-content'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>
      </div>

      <ul className='desktop-menu'>
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
