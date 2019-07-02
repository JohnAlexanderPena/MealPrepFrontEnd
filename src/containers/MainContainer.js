import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from '../../src/components/Login'
import SignUp from '../../src/components/SignUp'
import Home from './Home'
import BMIPage from '../../src/components/BMIPage'


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
    packages: obj
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
    console.log(this.state.packages)
    return (
      <Router>
        <Switch>
            <Route path="/signup" render={(routerProps) => <SignUp packages={this.state.packages} setCurrentUser={this.setCurrentUser} handleLoggedIn={this.handleLoggedIn} {...routerProps}/>}/>
            <Route path="/bmi" render={() => <BMIPage  packages={this.state.packages} currentUser={this.state.currentUser}/>} />
            <Route path="/" render={() => (this.state.loggedIn === true) ?
                  <Home getPackages={this.getPackages}loggedIn={this.state.loggedIn}currentUser={this.state.currentUser}handleLoggedIn={this.handleLoggedIn}/>
                                :
                  <Login setCurrentUser ={this.setCurrentUser} handleSignUpClick={this.handleSignUpClick} loggedIn={this.state.loggedIn} handleLoggedIn={this.handleLoggedIn}/> }/>
        </Switch>
      </Router>
    );
  }

}

export default MainContainer;

// <Route render={() => <h3>404 NOT FOUND</h3>} />
//
//
//
// <Route exact path="/" render={() => {
//     return (
//       <Login setCurrentUser ={this.setCurrentUser}
//              handleSignUpClick={this.handleSignUpClick}
//              loggedIn={this.state.loggedIn}
//              handleLoggedIn={this.handleLoggedIn}
//              />)
//            }
//           }/>




// {
//   (this.state.signUpClicked === false) ?
//
//   <Login setCurrentUser={this.setCurrentUser} handleSignUpClick={this.handleSignUpClick}/>
//   :
//   <SignUp setCurrentUser={this.setCurrentUser}/>
// }
