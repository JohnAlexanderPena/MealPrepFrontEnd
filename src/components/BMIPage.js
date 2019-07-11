import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Button, Card, Header, Icon } from 'semantic-ui-react'




class getBmi extends React.Component{

state = {
  packages: [],
  bmi: null
}



componentDidMount() {

  let result = Math.ceil(703 * this.props.currentUser.weight/(this.props.currentUser.height ** 2))

  fetch('http://localhost:3000/packages')
  .then(resp => resp.json())
  .then(response => {
    this.setState({
      packages: response,
      bmi: result
    })
  }).then(fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
      method: "PATCH",
      headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bmi: result,
        })
    })
  )
}




 bmiResults = () => {

  let result = Math.ceil(703 * this.props.currentUser.weight/(this.props.currentUser.height ** 2))


  if(result < 18.5){
      return `Your BMI of ${result} shows you are below the recommended weight and we recommend the Gain Package`
    }else if(result > 18.5 && result <24.9){
      return `Your BMI of ${result} shows you are at a healthy weight and we recommend the Balanced Package`
    }else if(result >= 25 && result < 29.9){
      return `Your BMI of ${result} shows you are above the recommended weight and we recommend the Slim Package`
    }else if(result >= 30 && result < 40){
      return `Your BMI of ${result} shows your are above the recommended wieght and we recommend the Slim Package`
    }else if(result >= 40){
      return `Your BMI of ${result} shows your are severely overweight and we recommend the Slim Package`
    }else{
      return `Your BMI is ${result}.`
    }
  }

  handleClick = (event) => {
    const result = Math.ceil(703 * this.props.currentUser.weight/(this.props.currentUser.height ** 2))
    // debugger;
    fetch("http://localhost:3000/packages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        name: event.target.name,
        price: event.target.value,
        quantiy: event.target.id
      })
    })
  this.props.history.push("/journal")
  window.location.reload();
}

render(){

return(
  <div>
      <div color="blue" style={{'text-align': 'center', 'color': 'rgb(41,135,205)'}}>
        <strong><h3>
          Results are not always guaranteed to be representative of actual recommended weight.
      <h3>{this.bmiResults()}</h3></h3></strong>
      </div>
      <Card.Group centered >
      <Card>
        <Card.Content>
          <Header as='h2'>
              <Icon color='blue' name='weight' />
              <Header.Content color='blue'>Gain Package</Header.Content>
            </Header>
          <Card.Meta>Helps with weight gain</Card.Meta>
          <Card.Description>
            This package is geared towards helping you get up to a healthy weight with the perfect combination of calories, high protein, and fats.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button  onClick={this.handleClick} id="8" value="60" name="Heavy" basic color='blue'>
              Choose
            </Button>8 Meals/week - $69.99
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Header as='h2'>
              <Icon color='blue' name='weight' />
              <Header.Content color='blue'>Balance Package</Header.Content>
            </Header>
          <Card.Meta>Helps maintain current weight and balances nutrition.</Card.Meta>
          <Card.Description>
            This package is geared towards keeping you at the healthy weight with the perfect combination of low calories, protein, and fats.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button onClick={this.handleClick} id="6" value="50" name="Balance"basic color='blue'>
              Choose
            </Button>6 Meals/week - $59.99
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Header as='h2'>
              <Icon color='blue' name='weight' />
              <Header.Content color='blue'>Slim Package</Header.Content>
            </Header>
          <Card.Meta>Aims for that slimmer look.</Card.Meta>
          <Card.Description>This package is geared towards helping you eat healthier with the perfect combination of low calories, protein, and low fats.</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button  onClick={this.handleClick} id="4" value="38" name="Light" basic color='blue'>
              Choose
            </Button>5 Meals/week - $49.99
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
  )
}
}

export default getBmi

// <Button as={NavLink} to="/journal">Home</Button>
