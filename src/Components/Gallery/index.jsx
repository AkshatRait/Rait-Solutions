import React from 'react'
import "./index.css"
import { Button } from 'react-bootstrap'

const Gallery = () => {
  return (
        <div className='gallery'>
        <h1>Why us?</h1>
    <div id="gallery">
        <div 
        className="container-one">
            <h4>Exceptional Attention to Detail:</h4>
            <p>Rait Solutions is known for its meticulous approach to car detailing. Their team pays close attention to every aspect of the vehicle, from interior cleaning to exterior polishing. This dedication to detail ensures that customers receive a thorough and high-quality service, leaving their cars looking immaculate.</p>
            <Button variant="outlined">Learn More</Button>
        </div>
        <div className="container-two">
            <img src="https://www.seattleautodetailandtint.com/static/dealer-22185/car-detail.jpg" alt="" />  
        </div>
        <div 
        className="container-three">
            <h4>Professional and Friendly Staff:</h4>
            <p>Customers often choose Rait Solutions for the outstanding customer experience. The company's staff is not only skilled but also friendly and professional. They take the time to understand the customer's needs and preferences, making the car detailing process enjoyable and stress-free. This commitment to excellent customer service sets Rait Solutions apart from the competition.</p>
            <Button variant="outlined">Learn More</Button>
        </div>
        <div className="container-four">
            <img src="https://www.seattleautodetailandtint.com/static/dealer-22185/images/paint-cleaning.jpg" alt="" />  
        </div>    
    </div>
    <h1>Contact us Now!</h1>
    </div>
  )
}

export default Gallery