import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom"
import { NavLink } from 'react-router-dom'


class LoginForm extends React.Component{


  state = {
    username: "",
    password: "",
  }


handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    if(this.state.username <=0 | this.state.password.length <= 0){
      alert("Please Enter Information")
    }else{
  		fetch("http://localhost:3000/login", {
  			method: "POST",
  			headers: {
  				"Content-Type": "application/json",
  				"Accepts": "application/json"
  			},
  			body: JSON.stringify(this.state)
  		})
  		.then(res => res.json())
  		.then(data => {
  			if (data.errors){
  				alert('Wrong Username and/or Password!')
  			} else {
          console.log(data)
  				this.props.setCurrentUser(data)
  			}
  		})
      }
  	}


render() {
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        <Image src="https://i.imgur.com/BtZWQ9i.png" /> Log-in to your account
      </Header>
      <Form onSubmit={this.handleSubmit} size='large'>
        <Segment stacked>
          <Form.Input onChange= {this.handleChange} name="username" fluid icon='user' iconPosition='left' placeholder='Username' />
          <Form.Input
          onChange={this.handleChange}
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
          />
          <Button type="submit" color='black' fluid size='large'>
              Login
          </Button>
        </Segment>
      </Form>
      <Message>
        <NavLink to="/signup">
          <Button color='black'>New to us? Sign Up</Button>
        </NavLink>
      </Message>
    </Grid.Column>
  </Grid>
    )
  }
}

export default LoginForm
