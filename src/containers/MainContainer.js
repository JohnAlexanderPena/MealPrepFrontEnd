import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from '../../src/components/Login'
import SignUp from '../../src/components/SignUp'
import Home from './Home'
import BMIPage from '../../src/components/BMIPage'
import Profile from '../../src/components/Profile'


class MainContainer extends Component {

state = {
  signUpClicked: false,
  loggedIn: false,
  currentUser: {},
  packages: []
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

updateUser = (user) => {
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    })
  }

handleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }


setCurrentUser = (data) => {
    localStorage.setItem("token", data.token)
    this.setState({
      currentUser: data,
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route path="/profile" render={() => <Profile currentUser={this.props.currentUser} packages={this.state.packages}/>}/>
            <Route path="/signup" render={(routerProps) => <SignUp getPackages={this.getPackages} packages={this.state.packages} setCurrentUser={this.setCurrentUser} handleLoggedIn={this.handleLoggedIn} {...routerProps}/>}/>
            <Route path="/bmi" render={() => <BMIPage  packages={this.state.packages} currentUser={this.state.currentUser}/>} />
            <Route path="/" render={(routerProps) => (this.state.loggedIn === true) ?
                  <Home getPackages={this.getPackages}loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}handleLoggedIn={this.handleLoggedIn}/>
                                :
                  <Login {...routerProps} setCurrentUser ={this.setCurrentUser} handleSignUpClick={this.handleSignUpClick} loggedIn={this.state.loggedIn} handleLoggedIn={this.handleLoggedIn}/> }/>
        </Switch>
      </Router>
    );
  }

}

export default MainContainer;
