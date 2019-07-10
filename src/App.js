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
  currentUser: []
}

  componentDidMount(){
      const token = localStorage.getItem("token")
      if (token){
        fetch(`http://localhost:3000/auto_login`, {
          headers: {
            "Authorization": token
          }
        })
        .then(res => res.json())
        .then(response => {
          if (response.errors){
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response,
            })
          }
        })
      }
    }



  render(){
    console.log(this.state.currentUser)
    return (
      <Router>
        <MainContainer currentUser={this.state.currentUser} classname="ui center aligned middle aligned grid" />
      </Router>
    )
  }
}

export default App;
