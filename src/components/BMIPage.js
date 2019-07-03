import React from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {  List } from 'semantic-ui-react'



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
      return `Your BMI of ${result} shows you are below the recommended weight and we reommend the Heavy Package`
    }else if(result > 18.5 && result <24.9){
      return `Your BMI of ${result} shows you are at a healthy weight`
    }else if(result > 25 && result < 29.9){
      return `Your BMI of ${result} shows you are above the recommended weight`
    }else if(result > 30 && result < 40){
      return `Your BMI of ${result} shows your are overweight`
    }else if(result > 40){
      return `Your BMI of ${result} shows your are severely overweight`
    }else{
      return `${result}!!`
    }
  }

render(){
return(
  <div>
    <h4>{this.bmiResults()}!!</h4>
    <Button as={NavLink} to="/">Home</Button>
  </div>
  )
}
}

export default getBmi



// BMI below 18.5: Underweight
//
// BMI 18.5 to 24.9: Healthy weight or "ideal body weight"
//
// BMI 25 to 29.9: Overweight
//
// BMI 30 and over: Obese
//
// BMI 40 and over: Severe obesity
