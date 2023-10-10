import React, { useState, useEffect } from 'react';
import './index.css';

const CustomerTest = () => {
  const arrayOfReviews = [
    {
      review:
        "Rait Solutions not only made my car look brand new, but their friendly and professional staff made the entire experience enjoyable. I wouldn't trust anyone else with my car detailing needs.",
      image:
        "https://media1.s-nbcnews.com/i/streams/2014/December/141212/1D274907421614-today-simpsons-25-141211-Maggie.jpg",
    },
    {
      review:
        "Rait Solutions took our car detailing experience to a whole new level. Their attention to detail and commitment to perfection truly set them apart in the industry.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png",
    },
    {
      review:
        "I've tried several car detailing services, but Rait Solutions exceeded my expectations. Their attention to detail and commitment to quality is truly impressive. My car has never looked better!",
      image:
        "https://www.shutterstock.com/image-illustration/3d-render-neanderthal-man-600w-1604210365.jpg",
    },
    {
      review:
        "Rait Solutions made my car look brand new again! Their team is highly skilled and professional, and the results speak for themselves. I'll definitely be a repeat customer.",
      image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2012/9/19/1348050411799/Ralph-Wiggum-003.jpg?width=700&quality=85&auto=format&fit=max&s=e0b63e3485a4a02f3697520f744e0a30",
    },
  ];

  const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCustomerIndex((prevIndex) => (prevIndex + 1) % arrayOfReviews.length);
    }, 8000); 

    return () => clearInterval(interval); 
  }, []);

  const customer = arrayOfReviews[currentCustomerIndex];

  return (
    <div id="customer-testimonials">
      <div className="customer-container">
        <img src={customer.image} alt="Customer" />
        <p>{customer.review}</p>
      </div>
    </div>
  );
};

export default CustomerTest;
