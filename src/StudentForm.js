import React from 'react';
import RegisterForm from './RegisterForm.js';
import Header from './Header';

const StudentForm = () => {
    return(
        <div>
            <Header />
            <div className="container-form">
            <h1> I want a buddy</h1>
            <h2> I am a social service student </h2>
            <RegisterForm />
            </div>
        </div>
    )
};

export default StudentForm;