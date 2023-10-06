import React, { useState } from 'react'
import './index.css'
import { Button } from 'react-bootstrap';

const Services = () => {
  let arrayOfCards = [
    {
      serviceName: 'Hand Wash & Detailing',
      image: 'https://northwestautosalon.com/wp-content/uploads/2014/04/24-step-hand-wash-car-wash-nwas.jpg',
      button: 'Learn More',
    },
    {
      serviceName: 'Paint Correction (buff & polish)',
      image: 'https://zappysautowashes.com/cdn/shop/articles/bee_1200x1200.jpg?v=1670437834',
      button: 'Learn More',
    },
    {
      serviceName: 'Ceramic Coating',
      image: 'https://m.media-amazon.com/images/I/91J59K7B8YL._AC_UF350,350_QL80_.jpg',
      button: 'Learn More',
    },
    {
      serviceName: 'PPF/Clear Bra',
      image: 'https://www.detailedimage.com/Ask-a-Pro/wp-content/uploads/2021/02/BMW-X5-Hood-PPF-Installation-Positioning-Film-Signature-Detailing-NJ.jpg',
      button: 'Learn More',
    },
    {
      serviceName: 'Window Tint',
      image: 'https://img.grouponcdn.com/metro_draft_service/FpsGPdVfEXRed3R5Zo5jDFprAcV/Fp-1500x1001/v1/c870x524.jpg',
      button: 'Learn More',
    },
    {
      serviceName: 'Mobile Detailing',
      image: 'https://static.wixstatic.com/media/29ef54_e36955e2a3d849bdb7b5e18917cecb1a~mv2.jpg/v1/fill/w_2048,h_1152,al_c/29ef54_e36955e2a3d849bdb7b5e18917cecb1a~mv2.jpg',
      button: 'Learn More',
    },
    // Add more objects as needed
  ];

  return (
    <div id="services-container">
      <h1>Here are all the provided services:</h1>
      <span></span>
      {arrayOfCards.map((card, index) => (
        <div className="service-cards" key={index}>
          <h3>{card.serviceName}</h3>
          <img src={card.image} alt={card.serviceName} />
          <Button variant='dark'>{card.button}</Button>
        </div>
      ))}
    </div>
  );
};

export default Services