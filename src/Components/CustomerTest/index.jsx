import React, { useState, useEffect } from 'react';
import './index.css';

const CustomerTest = () => {
  const arrayOfReviews = [
    {
      review:
        "Rait Solutions not only made my car look brand new, but their friendly and professional staff made the entire experience enjoyable. I wouldn't trust anyone else with my car detailing needs.",
      image:
        "https://i0.wp.com/i.pinimg.com/originals/13/75/29/137529739628b18fcf20eb16e9e5aafe.jpg?resize=160,120",
    },
    {
      review:
        "Rait Solutions took our car detailing experience to a whole new level. Their attention to detail and commitment to perfection truly set them apart in the industry.",
      image:
        "https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg",
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
      image: "https://www.varsity.co.uk/images/dyn/store/465/0/39262.jpeg",
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
