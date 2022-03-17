import React, { useState } from 'react'
import './index.scss'
import DahaDaha from '../../SVG/DahaDaha'
import Profile from '../../SVG/Profile'

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='header'>
      <DahaDaha />
      <div className='header__right'>
        <div className='header__right__button'
          style={{ display: isLoggedIn ? 'none' : 'flex' }}>
          <p className='login__text noselect'
            onClick={() => setIsLoggedIn(true)}>Giriş Yap</p>
        </div>
        {isLoggedIn ?
          <div className='profile'
            style={{ backgroundColor: '#F40000', cursor: 'pointer' }}
            onClick={() => setIsLoggedIn(false)}>
            <Profile />
            <div className='status__active' />
          </div>
          :
          <div className='profile'
            style={{ backgroundColor: '#000' }}>
            <Profile />
          </div>}
      </div>
    </div>
  )
}