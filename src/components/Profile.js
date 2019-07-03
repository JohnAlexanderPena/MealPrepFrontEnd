import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div><h3>Welcome {this.props.currentUser.name}!</h3></div>
    );
  }

}

export default Profile;
