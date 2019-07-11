import React, { Component } from 'react';
import './App.css';
// import Splash from '../src/components/Splash'
// import Login from '../src/components/Login'
// import Navbar from '../src/components/Navbar'
// import Splash from '../src/components/Splash'
import { BrowserRouter as Router } from "react-router-dom"
import MainContainer from '../src/containers/MainContainer'

class App extends Component{

  state = {
    packages: []
  }
componentDidMount() {
  fetch(`http://localhost:3000/packages`)
          .then(resp => resp.json())
          .then(resp => {
            this.setState({
              packages: resp
            })
      })
}

  render(){
    return (
      <Router>
        <MainContainer {...this.props} packages={this.state.packages}/>
      </Router>
    )
  }
}

export default App;
