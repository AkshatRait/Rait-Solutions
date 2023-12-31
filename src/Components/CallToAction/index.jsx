import React, { useState } from 'react';
import "./index.css";
import { Input } from '@mui/material';
import { Textarea,TextField } from '@mui/joy';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';

const CallToAction = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const templateParams = {
        to_name: 'Akshat', // Replace with the recipient's name or use formData.name
        from_name: formData.name,
        message: formData.message,
        from_email: formData.email,
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .send('service_33wuz55', 'template_ole5jki', templateParams, '448dGBeCVJDV_0SIi')
          .then(
            (result) => {
              console.log(result.text);
              // Handle success
            },
            (error) => {
              console.log(error.text);
              // Handle error
            }
          );
          setFormData({name: '',
          subject: '',
          email: '',
          message: '',})
      };
    
    const fields = ["name", "subject", "email", "message"];
    
    const divs = fields.map((item) => {
        if (item === "message") {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item.toUpperCase()}:</label>
                    <Textarea
                        variant="outlined"
                        minRows={2}
                        type="text"
                        id={item}
                        name={item}
                        value={formData[item]}
                        onChange={handleChange}
                        />
                </div>
            );
        } else {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item.toUpperCase()}</label>
                    <Input
                        type="text"
                        id={item}
                        name={item}
                        placeholder={item}
                        variant="soft"
                        required
                        label={item}
                        value={formData[item]}
                        onChange={handleChange}
                    />
                </div>
            );
        }
    });

    return (
        <div className='cta-header'>
             <h2>Send your vehicle's make,model,year and the type of service you are looking for in the message tab for an estimate.</h2>
        
        <div id="cta-container">
            <div className="cta-one">
                <h5>Contact Now</h5>
                <h3><strong>GET IN TOUCH NOW!</strong></h3>
                <p>Phone- (206)331-1304</p>
                <p>Email- AkshatRait@gmail.com</p>
                <p>Address- 124 Conch Street, Bikini Bottom</p>
            </div>
            <div className="cta-two">
                <form onSubmit={sendEmail}>
                    {divs}
                    <div>
                        <Button variant="dark" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default CallToAction;
