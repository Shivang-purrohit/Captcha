import React from 'react'

const Navbar = (props) => {

    
  return (
    <div className='navbar'>
      <button className='modeButton' onClick={props.switchMode}>Dark Mode</button>
    </div>
  )
}

export default Navbar
