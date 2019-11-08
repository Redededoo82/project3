import React from 'react';

import './App.css';
import LoginForm from  './LoginForm';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className="App">
          <SignUpForm></SignUpForm>
          <LoginForm></LoginForm>
    </div>
  );
}

export default App;
