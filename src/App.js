import React, { Component } from 'react';
import './App.css';
// import Splash from '../src/components/Splash'
// import Login from '../src/components/Login'
// import Navbar from '../src/components/Navbar'
// import Splash from '../src/components/Splash'
import { BrowserRouter as Router } from "react-router-dom"
import MainContainer from '../src/containers/MainContainer'

class App extends Component{




  render(){
    return (
      <Router>
        <MainContainer style={{position: 'center'}}/>
      </Router>
    )
  }
}

export default App;
