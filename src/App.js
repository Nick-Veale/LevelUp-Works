import React from 'react';
import Nav from './Components/Nav';
import SignUp from './Components/SignUp';
import Offer from './Components/Offer';
import Skills from './Components/Skills';
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div>
          <Nav />
          <SignUp />
          <Offer />
          <Skills />
      </div>
    )
  }
};

export default App;