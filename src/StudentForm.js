import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm.js';
import Header from './Header';

const StudentForm = () => {
    return(
        <div>
            <Header />
            <div className="container-form">
            <h1> ik wil een maatje worden</h1>
        <h2> Ik ben een student sociale dienst </h2>
                <RegisterForm />
            </div>
        </div>
    )
};

export default StudentForm;