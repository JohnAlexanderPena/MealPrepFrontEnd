import React from 'react'
import { Link, Redirect, NavLink } from 'react-router-dom'

class getBmi extends React.Component{

state = {
  bmi: 0
}



 bmiResults = () => {
  if(this.result < 18.5){
      return "Your BMI shows you are below the recommended weight"
    }else if(this.result > 18.5 && this.result <24.9){
      return "Your BMI shows you are at a healthy weight"
    }else if(this.result > 25 && this.result < 29.9){
      return "Your BMI shows you are above the recommended weight"
    }else if(this.result > 30 && this.result < 40){
      return "Your BMI shows your are O"
    }else if(this.result > 40){
      return "Your BMI shows your are o+"
    }else{
      return "Wrong Input"
    }
  }

render(){
return(
  <div>
    <h4>{this.bmiResults()}</h4>
    <h2>{}</h2>
    <NavLink to="/">Home</NavLink>
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
