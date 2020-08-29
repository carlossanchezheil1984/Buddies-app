import React from 'react';
import "./App.css";

import Header from './Header';
import Homepage from './Homepage';
import BuddiesForm from './BuddiesForm';
import StudentForm from './StudentForm';

//Main Site
function App(){
  return(
    <div className="App">
      <Header />
      <Homepage />

      <BuddiesForm />
      <StudentForm />
    </div>
  );
}
export default App;