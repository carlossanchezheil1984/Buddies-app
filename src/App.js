import React from 'react';
import "./App.css";
import BuddiesForm from "./BuddiesForm";
import StudentForm from "./StudentForm"
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



//Main Site
function App(){
  return(
    <div className="App">
        
        <Router>
        <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/BuddiesForm">
              <BuddiesForm/>
            </Route>
            <Route path="/StudentForm">
              <StudentForm/>
            </Route>
           
          </Switch>
      </Router>
    </div>
  );
}
export default App;




