import React, { Component } from 'react';
import { List, Image, Icon, Header, Segment, Grid, Button, Popup, Form } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom'
import ChangePlan from './ChangePlan'
// import newBMI from './newBMI'



class Profile extends Component {

  state = {
    weight: 0,
    height: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate = () => {
    let result = Math.ceil(703 * this.state.weight/(this.state.height ** 2))

    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
        method: "PATCH",
        headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
        },
        body: JSON.stringify({
          bmi: result,
        })
    })
    window.location.reload();
  }


  render() {

    const pk = this.props.packages.filter(pck => pck.user_id === this.props.currentUser.id)
    return (
      <div>
  <List>
      <List.Item icon='users' content={this.props.currentUser.name} />
      <List.Item icon='marker' content='New York, NY' />
    <List.Item icon='linkify' content={<a href='http://www.USDA.gov'>USDA Info</a>} />
  </List>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>Welcome {this.props.currentUser.username}!</Header.Content>
    </Header>
    <Image centered size='large' src='http://i.imgur.com/cDqspyH.png' />
      <Segment placeholder>
    <Grid columns={3} stackable textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='food' />
              Current Plan: { this.props.packages.length <= 0 || pk === undefined ? <div>Loading</div> : <div>{pk[0].name}</div> }
          </Header>
            <ChangePlan currentUser={this.props.currentUser} packages={this.props.packages} changePlan={this.props.changePlan} color="blue"/>
        </Grid.Column>
            <Grid.Column>
          <Header icon>
            <Icon name='weight' />
            Current BMI: {this.props.currentUser.bmi}
          </Header>
          {<React.Fragment>
            <Popup
              trigger={<Button color='blue'> Update BMI</Button>}
              content={
              <Form.Group widths={1}>
                Weight:<Form.Input onChange={this.handleChange}  type="password" name='weight' placeholder='Weight(pounds)' />
                Height:<Form.Input onChange={this.handleChange}  type="number" name='height' placeholder='Height(inches)' /><Button color='blue' onClick={this.handleUpdate}>Submit</Button>
              </Form.Group>}
              on='click'
              hideOnScroll
            />
          </React.Fragment>}
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
