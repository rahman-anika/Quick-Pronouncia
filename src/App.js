// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Mentors from './components/Mentors/Mentors';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">

      {/* Routing starts */}
      <Router>



        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/mentors">
            <Mentors></Mentors>
          </Route>


          <Route path="/about">
            <About></About>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>


      </Router>

      {/* Routing ends  */}

    </div>
  );
}

export default App;
