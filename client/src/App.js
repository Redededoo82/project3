import React, { Component } from 'react';
// import './Forms.css';
// import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
// import AboutPage from './Home';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Events from './Events';
import Error from './Error';
import API from "./utils/API"


class App extends Component {

  postUser(username, password, email) {
    API.newUser(username, email, password)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/events" component={Events} />
            {/* <Route path="/about" component={AboutPage}/> */}
            <Route path="/signup" component={SignUpForm} />
            {/* <Route path="/login" component={LoginForm}/> */}
            <Route path="/" exact component={Home} />
            <Route component={Error} />
            
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
