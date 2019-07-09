import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Button, Card, Image, Header, Icon } from 'semantic-ui-react'




class getBmi extends React.Component{

state = {
  packages: [],
}

componentDidMount() {
  fetch('http://localhost:3000/packages')
  .then(resp => resp.json())
  .then(response => {
    this.setState({
      packages: response
    })
  })
}




 bmiResults = () => {

  let result = Math.ceil(703 * this.props.currentUser.weight/(this.props.currentUser.height ** 2))

  if(result < 18.5){
      return `Your BMI of ${result} shows you are below the recommended weight and we recommend the Heavy Package`
    }else if(result > 18.5 && result <24.9){
      return `Your BMI of ${result} shows you are at a healthy weight`
    }else if(result >= 25 && result < 29.9){
      return `Your BMI of ${result} shows you are above the recommended weight`
    }else if(result >= 30 && result < 40){
      return `Your BMI of ${result} shows your are overweight`
    }else if(result >= 40){
      return `Your BMI of ${result} shows your are severely overweight`
    }else{
      return `Your BMI is ${result}.`
    }
  }

render(){
return(
  <div>
    <h3>Results are not always guaranteed to be representative of actual recommended weight.</h3>
    <h4>{this.bmiResults()}!!</h4>
      <Card.Group>
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
            <Button basic color='blue'>
              Choose
            </Button>
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
            <Button basic color='blue'>
              Choose
            </Button>
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
            <Button basic color='blue'>
              Choose
            </Button>
        </Card.Content>
      </Card>
    </Card.Group>
    <Button as={NavLink} to="/journal">Home</Button>
  </div>
  )
}
}

export default getBmi
