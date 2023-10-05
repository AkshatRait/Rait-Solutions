import React from 'react'
import "./index.css"
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

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
            <Link to='/src/Pages/Services/'><Button 
            sx={{
                color: 'white',
            }}
            variant="plain">Services</Button></Link>
           
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