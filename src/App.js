import React from 'react';
import "./App.css";
import RegisterForm from "./RegisterForm.js"
import Button from "./Button";

//Main Site
function App(){
  return(
    <div className="App">
      <Button buttonType="small" text="Holiwis" submitBtn="true" />
      <Button buttonType="big" text="Wuola" />
      <RegisterForm />
    </div>
  );
}
export default App;