import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from '../../src/components/Login'
import SignUp from '../../src/components/SignUp'
import Home from './Home'
import BMIPage from '../../src/components/BMIPage'
// import Navbar from '../../src/components/Navbar'
// import MealContainer from './MealContainer'
// import Splash from '../../src/components/Splash'

class MainContainer extends Component {

state = {
  signUpClicked: false,
  loggedIn: false,
  currentUser: {},
}

handleSignUpClick = () => {
  this.setState ({
    signUpClicked: !this.state.signUpClicked
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
    console.log(this.state)
    return (
      <Router>
        <Switch>
            <Route path="/signup" render={() =>
                <SignUp
                  setCurrentUser={this.setCurrentUser}
                  handleLoggedIn={this.handleLoggedIn}/>
              }/>
            <Route path="/bmi" render={() =>
                <BMIPage currentUser={this.state.currentUser}/>} />
            <Route path="/" render={() =>
                  (this.state.loggedIn === true) ?
                  <Home loggedIn={this.state.loggedIn}
                    currentUser={this.state.currentUser}
                    handleLoggedIn={this.handleLoggedIn}
                    />
                                :
                  <Login setCurrentUser ={this.setCurrentUser}
                         handleSignUpClick={this.handleSignUpClick}
                         loggedIn={this.state.loggedIn}
                         handleLoggedIn={this.handleLoggedIn}/>
                     }/>
            <Route render={() => <h3>404 NOT FOUND</h3>} />
        </Switch>
      </Router>
    );
  }

}

export default MainContainer;

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
