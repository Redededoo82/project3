import React from 'react';

import './Forms.css';
import LoginForm from  './LoginForm';
import SignUpForm from './SignUpForm';


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
