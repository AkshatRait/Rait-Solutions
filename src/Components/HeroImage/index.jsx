import React from 'react'
import "./index.css"

const HeroImage = () => {
  return (
    <div id="hero-img">
        <img src="/src/assets/carDetail.jpg" alt="" />
        <div className="hero-text">
            <h1>I am John Doe</h1>
    <p>And I'm a Photographer</p>
    <button>Hire me</button>
        </div>
    
    </div>
  )
}

export default HeroImage