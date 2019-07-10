import React, { Component } from 'react';
import { List, Image, Icon, Header, Segment, Grid, Button } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom'
import UpdateBmi from './UpdateBmi'



class Profile extends Component {

  render() {
    const pack = this.props.packages.filter(pck => pck.id === this.props.currentUser.id)
    return (
      <div>
  <List>
      <List.Item icon='users' content={this.props.currentUser.name} />
      <List.Item icon='marker' content='New York, NY' />
    <List.Item icon='linkify' content={<a href='http://www.USDA.gov'>USDA Info</a>} />
  </List>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>Welcome {this.props.currentUser.name}!</Header.Content>
    </Header>
    <Image centered size='large' src='http://i.imgur.com/cDqspyH.png' />
      <Segment placeholder>
    <Grid columns={3} stackable textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='food' />
            Current Package: {pack[0].name} Package
          </Header>
          <UpdateBmi changePlan={this.props.changePlan} color="blue"/>
        </Grid.Column>
            <Grid.Column>
          <Header icon>
            <Icon name='weight' />
            Current BMI: {this.props.currentUser.bmi}
          </Header>
          <Button primary>Update</Button>
        </Grid.Column>
        <Grid.Column>
          <Header icon>
            <Icon name='shop' />
            Buy Meals
          </Header>
          <Button as={NavLink} to="/meals" primary>Shop</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  </div>
    );
  }

}

export default Profile;
