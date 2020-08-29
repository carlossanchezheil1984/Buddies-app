import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm.js';

const BuddiesForm = () =>  {
        return(
            <div className="container-form">
                <h1> I want to be a buddy</h1>
                <h2>I am a social service student</h2>
                <RegisterForm />
            </div>
        );
};

export default BuddiesForm;