import React from 'react';
import "./App.css";
import RegisterForm from "./RegisterForm.js"

import Header from "./Header.js"

import Button from "./Button";
import Homepage from './Homepage';


//Main Site
function App(){
  return(
    <div className="App">

      <Homepage />

      <Button buttonType="small" text="Holiwis" submitBtn="true" />
      <Button buttonType="big" text="Wuola" />

      <RegisterForm />
    </div>
  );
}
export default App;