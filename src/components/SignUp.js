import React from 'react'
import { Button, Form, Grid, Header, Image, Checkbox } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom'


class SignUp extends React.Component{


state = {
  name: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  age: null,
  weight:null,
  height: null,
  checked: false
}

handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  createUser = () => {
    if(this.state.checked === false ){
      alert("Missing Info/Did Not Click Checkbox")
    }else{
		if (this.state.password === !this.state.passwordConfirmation ){
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
          this.props.history.push("/bmi")
				}
			})
		}
  }
	}

	handleSubmit = (event) => {
    event.preventDefault()
		if(this.state.password === this.state.passwordConfirmation){
      this.setState({
        [event.target.name]: event.target.value
      })
      this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

  loginClick = () => {
    this.props.history.push('/login')
  }

  toggle = () => this.setState(prevState => ({ checked: !prevState.checked }))


render(){
  console.log("SIGN UP")

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
            <Form.Input onChange={this.handleChange}  type="password" name='weight' placeholder='Weight(pounds)' />
            <Form.Input onChange={this.handleChange}  type="number" name='age' placeholder='Age' />
            <Form.Input onChange={this.handleChange}  type="number" name='height' placeholder='Height(inches)' />
          </Form.Group>
          <Form.Checkbox onChange={this.toggle} checked={this.state.checked} label='I agree that this is not an official dietary regimen.' />
            <Button color='blue' type="submit">
              Submit
            </Button>
            <Button onClick={this.loginClick} color='blue' to="/" type="submit">Back to Login</Button>
        </Form>
  </Grid.Column>
  </Grid>
    )
  }
}

export default SignUp
