import React from 'react';
import './App.css';
import RegisterForm from 'RegisterForm.js';

const buddiesForm = {
render() {
    return(
        <div className="container-form">
        <h3> if you're a buddy register here!</h3>
        <RegisterForm />
        </div>
    )}
};

export default buddiesForm;