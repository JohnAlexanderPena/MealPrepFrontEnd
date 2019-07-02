import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect, NavLink } from 'react-router-dom'


class SignUp extends React.Component{


state = {
  name: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  age: null,
  weight:null,
  height: null
}

handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  createUser = () => {
		if (this.state.password === !this.state.passwordConfirmation){
      alert("Make Sure Passwords Match!")
    }else{
			fetch("http://localhost:3000/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accepts": "application/json",
				},
				body: JSON.stringify(this.state)
			})
			.then(res => res.json())
			.then(response => {
				if (response.errors){
          alert("You Dun Goofed")
				} else {
          this.props.setCurrentUser(response)
				}
			})
      .then(this.props.history.push("/bmi"))
		}
	}

	handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

render(){
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src="https://i.imgur.com/BtZWQ9i.png" /> Sign-Up
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group unstackable widths={2}>
            <Form.Input onChange={this.handleChange} name='name' placeholder='First name' />
            <Form.Input onChange={this.handleChange} name='username' placeholder='Username' />
          </Form.Group>
          <Form.Group>
            <Form.Input onChange={this.handleChange} type="password" name='password' placeholder='Password' />
            <Form.Input onChange={this.handleChange} type="password" name='passwordConfirmation' placeholder='Password Confirmation' />
          </Form.Group>
          <Form.Group widths={1}>
            <Form.Input onChange={this.handleChange}  type="number" name='weight' placeholder='Weight(pounds)' />
            <Form.Input onChange={this.handleChange}  type="number" name='age' placeholder='Age' />
            <Form.Input onChange={this.handleChange}  type="number" name='height' placeholder='Height(inches)' />
          </Form.Group>
          <Form.Checkbox label='I agree that this is not an official dietary regimen.' />
            <Button type="submit">
              Submit
            </Button>
            <Button as={ NavLink } to="/" type="submit">Back to Login</Button>
        </Form>
  </Grid.Column>
  </Grid>
    )
  }
}

export default SignUp
