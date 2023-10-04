import React from 'react'
import "./index.css"
import Button from '@mui/joy/Button';

const Navbar = () => {
  return (
    <nav style={{display:'flex'}}>
        <h3>Rait Solutions</h3>
        <div className='buttons'>
            <Button 
            sx={{
                color: 'white',
            }}
            variant="plain">Home</Button>
            <Button 
            sx={{
                color: 'white',
            }}
            variant="plain">Services</Button>
            <Button 
            sx={{
                color: 'white',
            }}
            variant="plain">Reviews</Button>
            <Button 
            sx={{
                color: 'white',
            }}
            variant="plain">API</Button>
            <Button 
            sx={{
                color: 'white',
            }}
            variant="plain"className='book-btn'>Book us!</Button>
        </div>
    </nav>
  )
}

export default Navbar