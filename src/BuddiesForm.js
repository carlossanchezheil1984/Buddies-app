import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm';
import Header from './Header';

const buddiesForm = {
render() {
    return(
        
        <div className="container-form">
        <Header />
        <h3> if you're a buddy register here!</h3>
        <RegisterForm />
        </div>
    )}
};

export default buddiesForm;