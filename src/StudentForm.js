import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm.js';

const StudentForm = () => {
    return(
        <div className="container-form">
        <h3> if you're a Student register here!</h3>
        <RegisterForm />
        </div>
    )
};

export default StudentForm;