import React from 'react';
import "./App.css";
import RegisterForm from "./RegisterForm.js"
import Header from "./Header.js"

//Main Site
function App(){
  return(
    <div className="App">
      <Header/>
      <RegisterForm />
    </div>
  );
}
export default App;