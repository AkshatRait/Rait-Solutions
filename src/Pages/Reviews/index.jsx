import React from 'react'
import './index.css'
import { Card } from '@mui/material'
import ReactStars from 'react-stars'

const Reviews = () => {
 const arrayOfReviews = [
  {
    name: "Alice Johnson",
    rating: 4.5,
    review: "Rait Solutions did an incredible job detailing my car! They paid attention to every detail and left it looking brand new. I highly recommend them!",
    avatarSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b796f94c-9959-4e4d-b821-5d03fe111053/d5rwl33-abe9ad46-e8a2-435c-916a-138599a5e5c1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3OTZmOTRjLTk5NTktNGU0ZC1iODIxLTVkMDNmZTExMTA1M1wvZDVyd2wzMy1hYmU5YWQ0Ni1lOGEyLTQzNWMtOTE2YS0xMzg1OTlhNWU1YzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hgcQEfC4PMehX5R5316651iZ6oOMWDR2s23-rf3KvrA'
  },
  {
    name: "David Wilson",
    rating: 3.5,
    review: "Outstanding work by Rait Solutions! They transformed my dirty car into a spotless beauty. I'll definitely be returning.",
    avatarSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b796f94c-9959-4e4d-b821-5d03fe111053/d5rwl33-abe9ad46-e8a2-435c-916a-138599a5e5c1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3OTZmOTRjLTk5NTktNGU0ZC1iODIxLTVkMDNmZTExMTA1M1wvZDVyd2wzMy1hYmU5YWQ0Ni1lOGEyLTQzNWMtOTE2YS0xMzg1OTlhNWU1YzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hgcQEfC4PMehX5R5316651iZ6oOMWDR2s23-rf3KvrA'
  },
  {
    name: "Grace Turner",
    rating: 4,
    review: "I can't say enough good things about Rait Solutions. My car has never looked better. Their attention to detail is top-notch!",
    avatarSrc: 'https://i.kym-cdn.com/entries/icons/mobile/000/028/261/Matt_CPU.jpg'
  },
  {
    name: "Michael Davis",
    rating: 5,
    review: "I was blown away by the quality of service at Rait Solutions. My car feels like it just came out of the showroom. Highly recommended!",
    avatarSrc: 'https://i.pinimg.com/474x/35/34/07/353407818baabce9c458dbcc165ea3b3--marilyn-manson-wii.jpg'
  },
  {
    name: "Sophia Roberts",
    rating: 4.8,
    review: "Rait Solutions exceeded my expectations. My car looks amazing, and the team was friendly and professional. I'm a happy customer!",
    avatarSrc: 'https://cdn-mii.accounts.nintendo.com/2.0.0/miis/3e5328d61bd4860d/image/68747470733a2f2f-7066326d2e636f6d.png?type=face&expression=normal&width=270&bgColor=FFFFFF00&clothesColor=default&cameraXRotate=0&cameraYRotate=0&cameraZRotate=0&characterXRotate=0&characterYRotate=0&characterZRotate=0&lightDirectionMode=none&splitDepthOffset=0&splitMode=front&instanceCount=1&instanceRotationMode=model'
  },
  {
    name: 'Sophia Roberts',
    rating: 4,
    review:
      'I had a positive experience with Rait Solutions. They were efficient, and my car looks refreshed. Minor room for improvement, but I would return.',
    avatarSrc: 'https://cdn-mii.accounts.nintendo.com/2.0.0/miis/3e5328d61bd4860d/image/68747470733a2f2f-7066326d2e636f6d.png?type=face&expression=normal&width=270&bgColor=FFFFFF00&clothesColor=default&cameraXRotate=0&cameraYRotate=0&cameraZRotate=0&characterXRotate=0&characterYRotate=0&characterZRotate=0&lightDirectionMode=none&splitDepthOffset=0&splitMode=front&instanceCount=1&instanceRotationMode=model',
  },
  {
    name: 'Michael Davis',
    rating: 4,
    review:
      'Rait Solutions provided a solid detailing service. My car looks great, but there were a few minor spots they missed. Overall, good work.',
    avatarSrc: 'https://www.giantbomb.com/a/uploads/square_small/46/462814/3181392-8302754355-latest',
  }
]

  return (
    <div id='reviews-container'>  
    <h1><strong>Satisfied Customers</strong></h1>
      <div id='reviews'>
        {arrayOfReviews.map((review) => (
          <div className="review-card"key={review.name}>
            <img className="avatar" src={review.avatarSrc} alt="image" />
            <h4>{review.name}</h4>
            <p>{review.review}</p>
          <ReactStars value={review.rating} size={50} color2={'#ffd700'} edit={false}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
