import React from 'react';
import './App.css';
import Header from './Header';

const Submit = () => {
    return(
        <div>
            <Header />
            <div className="thank-you-container margin-auto">
                <div className="success-container">
                    <h1>Success! </h1>
                    <h2>Your information was sent correctly</h2>
                </div>
                <div className="contact-you-container">
                    <p> We will contact you to let you know the next steps, thanks for trusting us</p>
                    <a href="." className="big-button margin-auto">Go back to the home</a>
                </div>
            </div>
        </div>
    )}


export default Submit;
