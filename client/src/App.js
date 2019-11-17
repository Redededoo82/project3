import React, { Component } from 'react';
// import './Forms.css';
// import LoginForm from './LoginForm';
// import SignUpForm from './SignUpForm';
// import AboutPage from './Home';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Events from './Events';
import Error from './Error';
import API from "./utils/API"
import { FaArrowCircleUp } from 'react-icons/fa';
import fire from './config/Fire'
import ValidatedSignUpForm from './SignUpForm';

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      user:{},
    }
  }
  
  componentDidMount(){
    this.authListener()
  }
  
  authListener(){
    fire.auth().onAuthStateChanged((user)=> {
     console.log(user);
      if (user){
        this.setState({user});
       // localStorage.setItem('user', user.uid)
      }else {
        this.setState({user: null});
      //  localStorage.removeItem('user');
      }
    })
  }
  postUser(username, password, email) {
    API.newUser(username, email, password)
  }

  getUsers() {
    return(
      API.getUser()
    )
  }

  render() {
    return (
      <Router>
      
        <div className="App">
          <Nav />
          <Switch>
            {/* <Route path="/events" component={Events} /> */}
            {/* <Route path="/about" component={AboutPage}/> */}
            {/* <Route path="/signup" component={SignUpForm} /> */}
            {/* <Route path="/login" component={LoginForm}/> */}
            {this.state.user ? (<Events/> ) : (<Home/>)}
             
            <Route component={Error} />
            
          </Switch>
        </div>
      </Router>
    
    );
  }
}

export default App;
