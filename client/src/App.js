import React from 'react';

import './App.css';
import LoginForm from  './LoginForm';
import SignUpForm from './SignUpForm';

import ValidateLoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      
          <SignUpForm></SignUpForm>
          <br></br>
          <LoginForm></LoginForm>
          
    </div>
  );
}

export default App;
