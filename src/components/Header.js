import React from 'react'
import logo from '../assests/logo.svg'

const Header = () => {
  return (
    <header>
      <span className='logo'>
        <img className='headerImg' src = {logo} alt=''/> 
        <span>Task Mate</span>
      </span>
      
    </header>    
  )
}
export default Header