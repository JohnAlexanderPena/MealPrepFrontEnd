import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from '../../src/components/Login'
import SignUp from '../../src/components/SignUp'
import Home from './Home'
import BMIPage from '../../src/components/BMIPage'
import ShoppingCart from '../../src/components/ShoppingCart'


class MainContainer extends Component {

state = {
  signUpClicked: false,
  loggedIn: false,
  currentUser: null,
  packages: [],
  meals: [],
}

handleSignUpClick = () => {
  this.setState ({
    signUpClicked: !this.state.signUpClicked
  })
}

getPackages = (obj) => {
  this.setState({
    packages: obj,
    loggedIn: !this.state.loggedIn
  })
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
            loggedIn: !this.state.loggedIn
          })
        }
      })
    }
    fetch('http://localhost:3000/meals')
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      this.setState({
        meals: response
      })
    })
  }


handleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

signOutUser = () => {
    localStorage.removeItem('token')
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }


setCurrentUser = (data) => {
    localStorage.setItem("token", data.token)
    this.setState({
      currentUser: data.user,
      loggedIn: !this.state.loggedIn
    })
  }




  render() {
    console.log(this.state.meals)
    return (
      <Router>
        <Switch>
            <Route path="/signup" render={(routerProps) => <SignUp getPackages={this.getPackages} packages={this.state.packages} setCurrentUser={this.setCurrentUser} handleLoggedIn={this.handleLoggedIn} {...routerProps}/>}/>
            <Route path="/checkout" render={(routerProps) => <ShoppingCart centered addToCart={this.addToCart} changePlan={this.changePlan} currentUser={this.props.currentUser} packages={this.state.packages}/>}/>
            <Route path="/bmi" render={(routerProps) => <BMIPage packages={this.state.packages} {...routerProps} currentUser={this.state.currentUser}/>} />
            <Route path="/" render={(routerProps) => (this.state.loggedIn === true) ?
                  <Home {...routerProps} packages={this.state.packages} meals={this.state.meals}getPackages={this.getPackages} loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} signOutUser={this.signOutUser} handleLoggedIn={this.handleLoggedIn}/>
                                :
                  <Login {...routerProps} currentUser={this.state.currentUser} setCurrentUser ={this.setCurrentUser} handleSignUpClick={this.handleSignUpClick} loggedIn={this.state.loggedIn} handleLoggedIn={this.handleLoggedIn}/> }/>
        </Switch>
      </Router>
    );
  }

}

export default MainContainer;
