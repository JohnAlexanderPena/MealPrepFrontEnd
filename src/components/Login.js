import React from 'react';
import '../Login.css'

class Login extends React.Component{

  state = {
    name: '',
    username: '',
    password: '',
    weight: null,
    bmi: null,
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSignUpForm = () => {
    
  }


render() {
  console.log(this.state)
    return (
    <div class="container__child signup__form">
      <form action="POST">
        <div class="form-group">
          <label for="username">Username</label>
          <input onChange={this.handleChange} class="form-control" type="text" name="username" id="username" placeholder="Lifting Larry" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input onChange={this.handleChange} class="form-control" type="text" name="email" id="email" placeholder="james.bond@MyMeals.com" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input onChange={this.handleChange} class="form-control" type="password" name="password" id="password" placeholder="********" required />
        </div>
        <div class="form-group">
          <label for="passwordRepeat">Repeat Password</label>
          <input onChange={this.handleChange} class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
        </div>
        <div class="m-t-lg">
          <ul class="list-inline">
            <li>
              <input class="btn btn--form" type="submit" value="Register" />
            </li>
            <li>
              <a class="signup__link" href="#">I am already a member</a>
            </li>
          </ul>
        </div>
      </form>
    </div>
    )
  }
}

export default Login;
