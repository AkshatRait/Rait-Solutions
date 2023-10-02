import React, { useState } from 'react'
import "./index.css"
import { Input, TextField } from '@mui/material';
import { Button } from 'bootstrap';
import { Textarea } from '@mui/joy';
import nodemailer from 'nodemailer';
import { google } from 'googleapis'

const CallToAction = () => {

    const CLIENT_ID = '238158934202-9r1fpuqi6c54ogs7nbe9h1nsmfmpt7l9.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04tbyBzKbpx_-CgYIARAAGAQSNwF-L9IrOmN31j3N4f5ErFhpuVPvnstGyjh1QZZPeCxVRv5vig2cymsMKpnZMsLNnSVp6vGTpUo';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'akshatrait@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: formData.email,
      to: 'akshatrait@gmail.com',
      subject: formData.subject,
      text: formData.message,
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}


   


    const [formData,setFormData] = useState(
        {name:'', 
        subject:'' , 
        email:'' , 
        message:''});

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
    
    }
    const handleSubmit = () =>{
        e.preventDefault();
        sendMail()
        .then((result) => console.log('Email sent...', result))
        .catch((error) => console.log(error.message)); 
    }

    let fields = ["name", "subject", "email", "message"];

    let divs = fields.map((item) => {
        if (item === "message") {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item}:</label>
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
            )
        } else {
            return (
                <div key={item}>
                    <Input
                        type="text"
                        id={item}
                        name={item}
                        placeholder={item}
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
            <p>Phone- (206)331-1304</p>
            <p>Address-
                asdsa@gmask.com
            </p>
        </div>
        <div className="cta-two">
        <form onSubmit={handleSubmit}>
            {divs}
            <div>  
            </div>
        </form>
        </div>
    </div>
  )
}

export default CallToAction