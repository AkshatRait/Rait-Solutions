import React from 'react'
import "./index.css"

const Gallery = () => {
  return (
    <div id="gallery">
        <div 
        className="container-one">
            <h4>lsadhoi asdi apsko </h4>
            <p>djas slhdska jsadkjl d</p>
            <button>Learn More</button>
        </div>
        <div className="container-two">
            <img src="/src/assets/carDetail.jpg" alt="" />  
        </div>
        <div 
        className="container-three">
            <h4>lsadhoi asdi apsko </h4>
            <p>djas slhdska jsadkjl d</p>
            <button>Learn More</button>
        </div>
        <div className="container-four">
            <img src="/src/assets/carDetail.jpg" alt="" />  
        </div>    
    </div>
  )
}

export default Gallery