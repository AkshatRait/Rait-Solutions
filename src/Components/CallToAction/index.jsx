import React, { useState } from 'react'
import "./index.css"
import { TextField } from '@mui/material';
import { Button } from 'bootstrap';

const CallToAction = () => {
    const [formData,setFormData] = useState(
        {name:'', 
        phone:'' , 
        email:'' , 
        message:''});

    const handleChange =()=>{
        console.log('changed');
    }
    const handleSubmit = () =>{
        console.log('submitted');
    }
    let fields = ["name", "phone", "email", "message"];

    let divs = fields.map((item) => {
        if (item === "message") {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item}:</label>
                    <textarea
                        type="text"
                        id={item}
                        name={item}
                        value={formData[item]}
                        onChange={handleChange}
                    ></textarea>
                </div>
            )
        } else {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item}:</label>
                    <TextField
                        type="text"
                        id={item}
                        name={item}
                        variant="outlined"
                        label="item"
                        value={formData[item]}
                        onChange={handleChange}
                    />
                </div>
            )
        }
    });


  return (
    <div id="cta-container">
        <div className="cta-one">
            <h5>Contact Now</h5>
            <h3><strong>GET IN TOUCH NOW!</strong></h3>
            <p>sbfjksn sdkflj sdks dfk</p>
            <p>Phone- (205)512-2948</p>
            <p>Address-
                asdsa@gmask.com
            </p>
        </div>
        <div className="cta-two">
        <form onSubmit={handleSubmit}>
            {divs}
            <div>
                <button type="submit">Submit</button>
                
            </div>
        </form>
        </div>
    </div>
  )
}

export default CallToAction