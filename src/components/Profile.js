import React, { Component } from 'react';
import { List } from 'semantic-ui-react'


class Profile extends Component {

  render() {
    return (
  <List>
      <List.Item icon='users' content={this.props.currentUser.name} />
      <List.Item icon='marker' content='New York, NY' />
      <List.Item
        icon='mail'
        content={<a href='mailto:jack@semantic-ui.com'>j{this.props.currentUser.name}</a>}
      />
    <List.Item icon='linkify' content={<a href='http://www.USDA.gov'>USDA Info</a>} />
  </List>
    );
  }

}

export default Profile;
