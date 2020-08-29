import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm.js';

const StudentForm = () => {
    return(
        <div className="container-form">
            <h1> I want a buddy</h1>
            <h2>I want a social service student buddy</h2>
            <RegisterForm />
        </div>
    )
};

export default StudentForm;