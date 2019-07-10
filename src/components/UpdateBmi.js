import React from 'react'
import {  NavLink } from "react-router-dom"

import { Header, Button, Popup, Grid } from 'semantic-ui-react'

// const pk = this.props.packages.filter(pck => pck.user_id === this.props.currentUser.id)

const changePlan = (props) => {
  return (<Popup trigger={<Button color='blue'>View/Change Package</Button>} flowing hoverable>
    <Grid centered divided columns={3}>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Light Plan</Header>
        <p>
          <b>4 Meals per Week</b> $37.99/week
        </p>
        <Button value="light" onClick={() => props.changePlan("Light")}>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Balanced Plan</Header>
        <p>
          <b>6 Meals Per Week</b> $49.99/week
        </p>
        <Button value="balanced" onClick={() => props.changePlan("Balance")}>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Heavy Plan</Header>
        <p>
          <b>8 Meals Per Week</b> $59.99/week
        </p>
        <Button as={NavLink} to="/journal" value="heavy" onClick={() => props.changePlan("Heavy")}>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header color='blue' as='h4'><strong>Current Plan:{} </strong></Header>
        <p>
          <b>6 Meals Per Week</b> $49.99/week
          </p>
        </Grid.Column>
    </Grid>
    </Popup>)
}

export default changePlan

// <Button value="balanced" onClick={() => props.changePlan("Balance")}>Choose</Button>
