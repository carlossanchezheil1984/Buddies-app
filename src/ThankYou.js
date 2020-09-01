import React from 'react';
import './App.css';
import Header from './Header';

const Submit = () => {
    return(
        <div>
            <Header />
            <div className="thank-you-container">
                <div className="success-container">
                    <h1>Success! </h1>
                    <h2> Uw gegevens zijn correct verzonden </h2>
                </div>
                <div className="contact-you-container">
                    <p> We will contact you soon, please be patient.we nemen contact met u op om u de volgende stappen te laten weten, bedankt voor uw vertrouwen </p>
                    <a href="." className="big-button"> ga terug naar de startpagina </a>
                </div>
            </div>
        </div>
    )}


export default Submit;
