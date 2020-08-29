import React from 'react';
import "./App.css";
import BuddiesForm from "./BuddiesForm";
import RegisterForm from "./RegisterForm";

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
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/BuddiesForm">
              <BuddiesForm/>
            </Route>
            
          </Switch>
      </Router>
    </div>
  );
}
export default App;




