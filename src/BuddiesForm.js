import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm.js';
import Header from './Header';
const BuddiesForm = () =>  {
        return(
            <div className="container-form">
                <Header/>
                <h3> if you're a buddy register here!</h3>
                <RegisterForm />
            </div>
        );
};

export default BuddiesForm;