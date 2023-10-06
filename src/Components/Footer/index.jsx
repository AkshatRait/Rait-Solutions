import React from 'react'
import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <br />
        <div className="midsection-footer">
            <img src="/src/assets/Screenshot 2023-10-02 105809.png" alt="" />
            <div className='footer-socials'>
            <p>Address-</p>
              <p>124 Conch Street, Bikini Bottom.</p>
            </div>
            <div className='footer-socials'>
            <p>Phone-</p>
              <p>1 (206) 621-2395</p>
            </div>
            <div className='footer-socials'>
            <p>Socials-</p>
              <p>Rait Solutions LLC</p>
            </div>
        </div>
        <br />
        <div className="bottomsection-footer">
            <div>
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
                variant="plain">Book us!</Button>
            </Link>
            </div>
            <p>Copyright</p>
        </div>
    </footer>
  )
}

export default Footer