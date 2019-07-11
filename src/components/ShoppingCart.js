import React, { Component } from 'react';
import { Image, Item, Grid } from 'semantic-ui-react'


class ShoppingCart extends Component {

  render() {
    let total = 0

      return(
        <div>
        <Grid textAlign="center"><Grid.Column textAlign="center">
      <Item.Group textAlign="center">{this.props.clickedMeals.map(meal => {
          return<Item key={meal.id} textAlign="center">
      <Item.Content>
        <Item.Header as='a'>{meal[0].name}</Item.Header>
        <Item.Meta>{meal[0].veggie}</Item.Meta>
        <Item.Description>
          <Item.Image textAlign="center" size='tiny' src={meal[0].image} />
        </Item.Description>
        <Item.Extra>Price: ${meal[0].price}</Item.Extra>
      </Item.Content>
    </Item>
        })}
  </Item.Group>
  </Grid.Column>
</Grid>
<h3 style={{'text-align': 'center'}}>
Your Total is:
<strong>
      {this.props.clickedMeals.map( meal => {
         total += meal[0].price
      })}${total}</strong>
      </h3>
</div>
    )
  }
}

export default ShoppingCart;
// <Grid>
//     <Grid.Column textAlign="center">
//       <Button>contact us</Button>
//     </Grid.Column>
//   </Grid>
