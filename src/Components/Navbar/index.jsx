import React from 'react'
import "./index.css"

const Navbar = () => {
  return (
    <nav>
        <h3>Rait Solutions</h3>
        <div className='buttons'>
            <button>Home</button>
            <button>Services</button>
            <button>Reviews</button>
            <button>API</button>
            <button className='book-btn'>Book us!</button>
        </div>
    </nav>
  )
}

export default Navbar