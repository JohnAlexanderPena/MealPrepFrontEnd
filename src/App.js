import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import MainContainer from '../src/containers/MainContainer'

class App extends Component{


  render(){
    return (
      <Router>
        <MainContainer />
      </Router>
    )
  }
}

export default App;
