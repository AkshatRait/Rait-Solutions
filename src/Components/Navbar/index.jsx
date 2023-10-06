import React from 'react'
import "./index.css"
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{display:'flex'}}>
        <div className="logo-name">
            <img src="/src/assets/Screenshot 2023-10-02 105809.png" alt="" />
        <h3>Rait Solutions</h3>
        </div>
        <div className='buttons'>
            <Link to="/">
                <Button 
                sx={{
                    color: 'white',
                }}
                variant="plain">Home</Button>
            </Link>

            <Link to='/services'>
                    <Button 
                sx={{
                    color: 'white',
                }}
                variant="plain">Services</Button>
            </Link>
           
           <Link to='/reviews'>
                <Button 
                sx={{
                    color: 'white',
                }}
                variant="plain">Reviews</Button>
           </Link>
            <Link to="/about">
                <Button 
                sx={{
                    color: 'white',
                }}
                variant="plain">About</Button>
            </Link>
            <Link to='/booking'>
                <Button 
                sx={{
                    color: 'white',
                }}
                className='booking-btn'>Book us!</Button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar