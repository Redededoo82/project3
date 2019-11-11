import React from 'react';
// import './Forms.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AboutPage from './AboutPage';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Events from './Events';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/events" component={Events}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
