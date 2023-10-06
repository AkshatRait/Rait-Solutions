import React from 'react'
import './index.css'
import { Card } from '@mui/material'

const Reviews = () => {
 const arrayOfReviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    review: "Rait Solutions did an incredible job detailing my car! They paid attention to every detail and left it looking brand new. I highly recommend them!"
  },
  {
    name: "David Wilson",
    rating: 5,
    review: "Outstanding work by Rait Solutions! They transformed my dirty car into a spotless beauty. I'll definitely be returning."
  },
  {
    name: "Grace Turner",
    rating: 5,
    review: "I can't say enough good things about Rait Solutions. My car has never looked better. Their attention to detail is top-notch!"
  },
  {
    name: "Michael Davis",
    rating: 5,
    review: "I was blown away by the quality of service at Rait Solutions. My car feels like it just came out of the showroom. Highly recommended!"
  },
  {
    name: "Sophia Roberts",
    rating: 5,
    review: "Rait Solutions exceeded my expectations. My car looks amazing, and the team was friendly and professional. I'm a happy customer!"
  }
]

  return (
    <div id='reviews-container'>
      {arrayOfReviews.map((review) => (
        <div key={review.name}>
          <h4>{review.name}</h4>
          <p>{review.review}</p>
          <p>{review.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews
