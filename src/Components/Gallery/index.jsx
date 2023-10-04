import React from 'react'
import "./index.css"
import { Button } from 'react-bootstrap'

const Gallery = () => {
  return (
    <div id="gallery">
        <div 
        className="container-one">
            <h4>lsadhoi asdi apsko </h4>
            <p>djas slhdska jsadkjl d</p>
            <Button variant="outlined">Learn More</Button>
        </div>
        <div className="container-two">
            <img src="/src/assets/carDetail.jpg" alt="" />  
        </div>
        <div 
        className="container-three">
            <h4>lsadhoi asdi apsko </h4>
            <p>djas slhdska jsadkjl d</p>
            <Button variant="outlined">Learn More</Button>
        </div>
        <div className="container-four">
            <img src="/src/assets/carDetail.jpg" alt="" />  
        </div>    
    </div>
  )
}

export default Gallery