import React from 'react'
import { Link, Redirect, NavLink } from 'react-router-dom'

const getBmi = (props) => {

let result = (703 * props.currentUser.weight/(props.currentUser.height ** 2))

let bmiResults = (props) => {
  if(result < 18.5){
    return "Your BMI shows you are below the recommended weight"
  }else if(result > 18.5 && result <24.9){
    return "Your BMI shows you are at a healthy weight"
  }else if(result > 25 && result < 29.9){
    return "Your BMI shows you are above the recommended weight"
  }else if(result > 30 && result < 40){
    return "Your BMI shows your are O"
  }else if(result > 40){
    return "Your BMI shows your are o+"
  }else{
    return "Wrong Input"
  }
  }

console.log(props.packages)

return(
  <div>
    <h6>{bmiResults()}</h6>
    <h2>{}</h2>
    <NavLink to="/">Home</NavLink>
  </div>
  )
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
