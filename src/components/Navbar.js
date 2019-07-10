import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom'
// import Journal from './../containers/Journal'


 class Navbar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (

      <Menu stackable>
        <Menu.Item
          as={NavLink} to="/profile">
          <img src='https://i.imgur.com/BtZWQ9i.png' alt="logo"/>
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/profile"
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
        Profile
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/journal"
          name='journal'
          active={activeItem === 'journal'}
          onClick={this.handleItemClick}
        >
          Journal
        </Menu.Item>

        <Menu.Item
          as={NavLink} to="/meals"
          name='meals'
          active={activeItem === 'meals'}
          onClick={this.handleItemClick}
        >
          Packages
        </Menu.Item>
        <Menu.Item position="right"
          onClick={null}
          as={NavLink} to="/checkout" name='checkout'
          active={activeItem === 'sign-in'}
          >
          Checkout
        </Menu.Item>
        <Menu.Item
          onClick={this.props.signOutUser}

          as={NavLink} to="/" name='login'
          active={activeItem === 'sign-in'}
          >
          Sign-Out
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;
