import React, { Component } from 'react';
import { Image, Item, Grid } from 'semantic-ui-react'


class ShoppingCart extends Component {

  render() {
      return(
        <Grid textAlign="center"><Grid.Column textAlign="center">
      <Item.Group textAlign="center">{this.props.clickedMeals.map(meal => {
          return<Item textAlign="center">
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
    )
  }
}

export default ShoppingCart;
// <Grid>
//     <Grid.Column textAlign="center">
//       <Button>contact us</Button>
//     </Grid.Column>
//   </Grid>
