import React, { Component } from 'react';

class MealContainer extends Component {

  // state = {
  //   meals: []
  // }
  //


  render() {
    return (
      <div>
        <ul>
          {this.props.meals.map(meal => {
            return <li> {meal.name}</li>
          })}
        </ul>
      </div>
    );
  }

}

export default MealContainer;
