import React, { useState } from 'react'
import './TopNavrbar.css'

function TopNavrbar() {
  const [showRightSide, setShowRightSide] = useState(false)

  const toggleRightSide = () => {
    setShowRightSide(!showRightSide)
  }

  return (
    <div className='navbar'>
      <div className='left'>
        {/* Logo or any custom content */}
        <img
          alt=''
          src='logo.png'
          width='30'
          height='30'
          className='logo logo-white'
        />
        <span style={{ fontWeight: 'bold' }}>MATERIAL</span>
        <span style={{ textTransform: 'uppercase' }}>PRO</span>
        <i className='bi bi-search' style={{ marginLeft: '25px' }}></i>
      </div>
      <div className={`right ${showRightSide ? 'show' : ''}`}>
        <button type='button' className='btn btn-pink'>
          Upgrade to Pro
        </button>
        <img alt='Profile' src='profile.jpg' className='profile-photo' />
      </div>
      <div className='toggle-right' onClick={toggleRightSide}>
        <img alt='Profile' src='profile.jpg' className='profile-photo' />
      </div>
    </div>
  )
}

export default TopNavrbar
