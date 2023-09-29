import React from 'react'
import './index.css'

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
              <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Book</button>  
            </div>
            <p>Copyright</p>
        </div>
    </footer>
  )
}

export default Footer