import React, { Component, Fragment } from 'react';
import {  Button, Item, Label, Icon, Popup } from 'semantic-ui-react'


class MealContainer extends Component {

state = {
  filteredMeals: this.props.meals
}

handleFilter = (event) => {
  const veggieMeals = this.props.meals.filter(meal => meal.veggie === "Vegetarian")
  if(event.target.value === "vegetarian"){
    this.setState({
      filteredMeals: veggieMeals
    })
  }else
  this.setState({
    filteredMeals: this.props.meals
  })
}

buyMeal = (event) => {
  const id = event.target.id
    this.props.addToCart(id)
}

  render() {
    console.log("MOUTNED MEAl CONTAINER")

    return (
    <Fragment>
      <Button value="vegetarian" onClick={this.handleFilter}>Show Vegetarian Meals Only</Button>
      <Button value="all" onClick={this.handleFilter}>Show All</Button>
      <Item.Group divided>
            {this.state.filteredMeals.map((meal) => {
              return <Item key={meal.id}>
                      <Item.Image src={meal.image} />
                <Item.Content>
                  <Item.Header as='a'>{meal.name}</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>Protein: {meal.protein}</span>
                    </Item.Meta>
                    <Item.Meta>
                    <span className='cinema'>Fat:{meal.fat}</span>
                    </Item.Meta>
                    <Item.Meta>
                    <span className='cinema'>Price:$8</span>
                    </Item.Meta>
                    <Item.Meta>
                    <span className='cinema'>Energy:{meal.energy}</span>
                  </Item.Meta>
                  <Item.Description> Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.!</Item.Description>
                  <Item.Extra>
                    <Popup
                       trigger={<Button id={meal.id} onClick={this.buyMeal} primary floated='right'>Buy me<Icon name='right chevron'/></Button>}
                      content='Added To Cart'
                       on='click'
                       hideOnScroll
                     />
                    <Label>{meal.veggie}</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
                   })}
        </Item.Group>
        </Fragment>
          );
        }
}

export default MealContainer;
//
// <React.Fragment>
//   <Popup
//     trigger={<Button id={meal.id} onClick={this.buyMeal} primary floated='right'>Buy me<Icon name='right chevron'/></Button>}
//     content='Hide the popup on any scroll event'
//     on='click'
//     hideOnScroll
//   />
// </React.Fragment>
