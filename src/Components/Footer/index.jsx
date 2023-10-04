import React from 'react'
import './index.css'
import { Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <br />
        <div className="midsection-footer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s" alt="" />
            <p>Address</p>
            <p>Phone</p>
            <p>Socials</p>
        </div>
        <br />
        <div className="bottomsection-footer">
            <div>
              <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
            <Button>Book</Button>  
            </div>
            <p>Copyright</p>
        </div>
    </footer>
  )
}

export default Footer