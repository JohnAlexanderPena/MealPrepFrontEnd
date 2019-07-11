import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from '../../src/components/Navbar'
// import PackagePage from '../../src/components/PackagePage'
import MealContainer from './MealContainer'
import Journal from './Journal'
import ShoppingCart from '../../src/components/ShoppingCart'
import Profile from '../../src/components/Profile'



class Home extends Component {

state = {
  meals: [],
  journals: [],
  packages: [],
  articles: [],
  clickedMeals: [] //settingStateOfClickedMeals
}


componentDidMount(){
  if (this.props.loggedIn === false) {
    this.props.push("/")
  }else {
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
  .then(responseObj => {
    this.setState({
      journals: responseObj
        })
      })
    )
    // .then(fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=3de475525dde45439b65bf3216d76091')
    // .then(resp => resp.json())
    // .then(allNews => {
    //   console.log(allNews)
    // }))
  }
}

getNew = () => {
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=3de475525dde45439b65bf3216d76091')
  .then(resp => resp.json())
  .then(allNews => {
  })
}

journalEntry = (entryObj) => {
  fetch('http://localhost:3000/journals', {
    method: "POST",
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      energy: entryObj.energy,
      content: entryObj.content,
      protein: entryObj.protein,
      sugar: entryObj.sugar,
      carbs: entryObj.carbs,
      fat: entryObj.fat,
      user_id: this.props.currentUser.id
      })
    })
    .then(fetch('http://localhost:3000/journals')
    .then(resp => resp.json())
    .then(resonseObj => {
      this.setState({
        journals: resonseObj
        })
      })
    )
    window.location.reload();
  }

  changePlan = (event) => {
    debugger;
    fetch(`http://localhost:3000/packages/${this.props.currentUser.id}`, {
      method: "PATCH",
      headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        name: event
      })
    })
  }

  addToCart = (id) => {
   const foundMeal = (this.state.meals.filter(meal => meal.id == id ))
    this.setState({
      clickedMeals: [...this.state.clickedMeals, foundMeal]
    })
  }



  render() {
    console.log(this.state.clickedMeals, this.state.meals)
    return (
      <Router>
        <Navbar signOutUser={this.props.signOutUser}/>
            <Route path="/profile" render={(routerProps) => <Profile changePlan={this.changePlan} currentUser={this.props.currentUser} packages={this.state.packages}/>}/>
            <Route path="/checkout" render={(routerProps) => <ShoppingCart meals={this.state.meals} clickedMeals={this.state.clickedMeals} addToCart={this.addToCart} changePlan={this.changePlan} currentUser={this.props.currentUser} packages={this.state.packages}/>}/>
            <Route path="/meals" render={(routerProps) => <MealContainer addToCart={this.addToCart} currentUser={this.props.currentUser} meals={this.state.meals} />}/>
            <Route path="/journal" render={(routerProps) => <Journal journalEntry={this.journalEntry} currentUser={this.props.currentUser} journals={this.state.journals}/>}/>
    </Router>
    );
  }
}

export default Home;



// <Route path="/packages" render={() => <PackagePage currentUser={this.props.currentUser} packages={this.state.packages}/>}/>
