import React, { Component } from 'react';
import { Grid, Image, Button, Search } from 'semantic-ui-react'


class MealContainer extends Component {

  render() {
    return (

        <Grid columns='4' divided>
          <Search centered
              onSearchChange={this.handleChange}
              name="searchTerm"/>
          <Grid.Row>
            {this.props.meals.map(meal => {
              return <Grid.Column>
                          <Image src={meal.image} /><Button>Add To Package</Button></Grid.Column>
                   })}
                   </Grid.Row>
                 </Grid>
          );
        }

}

export default MealContainer;
