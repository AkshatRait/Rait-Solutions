import React from 'react'
import "./index.css"
import { Button } from 'react-bootstrap'

const HeroImage = () => {
  return (
    <div id="hero-img">
        <div className="hero-text">
            <h1>Welcome to Rait Solutions</h1>
            <p>And here we do car detailing</p>
            <Button>Book us here!</Button>
        </div>
    </div>
  )
}

export default HeroImage