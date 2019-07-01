import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Navbar from '../../src/components/Navbar'
import PackagePage from '../../src/components/PackagePage'
import MealContainer from './MealContainer'
import Journal from './Journal'

class Home extends Component {

state = {
  meals: [],
  journals: [],
  packages: [],
}

getPackages = () => {

}

getMeals = () => {

}

componentDidMount(){
  fetch('http://localhost:3000/packages')
  .then(resp => resp.json())
  .then(response => {
    this.setState({
      packages: response
    })
  })
  .then(
  fetch('http://localhost:3000/meals')
  .then(res => res.json())
  .then(meals => {
    this.setState({
      meals: meals
    })
  })
)
  .then(fetch('http://localhost:3000/journals')
  .then(resp => resp.json())
  .then(resonseObj => {
    this.setState({
      journals: resonseObj
      })
    })
  )
}



  render() {
    return (
      <Router>
          <Navbar handleLoggedIn={this.props.handleLoggedIn}/>
          <Route path="/packages" render={() => <PackagePage currentUser={this.props.currentUser} packages={this.state.packages}/>}  />
          <Route path="/meals" render={() => <MealContainer currentUser={this.props.currentUser} meals={this.state.meals} />}/>
          <Route path="/journal" render={() => <Journal currentUser={this.props.currentUser} journals={this.state.journals}/>} />
      </Router>
    );
  }
}

export default Home;
