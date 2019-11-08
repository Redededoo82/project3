import React from 'react';

import './Forms.css';
import LoginForm from  './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="App">
          <AboutPage></AboutPage>
          <SignUpForm></SignUpForm>
          <br></br>
          <LoginForm></LoginForm>
          
    </div>
  );
}

export default App;
