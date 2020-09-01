import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm.js';
import Header from './Header';
const BuddiesForm = () =>  {
        return(
            <div>
                <Header />
                <div className="container-form">
                <h1> ik wil een maatje</h1>
                <h2> Ik wil een studievriend van de sociale dienst </h2>
                <RegisterForm />
            </div>
            </div>
        );
};

export default BuddiesForm;