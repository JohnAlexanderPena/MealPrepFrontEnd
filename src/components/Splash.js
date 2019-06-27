import React from 'react';

import '../App.css';

class Splash extends React.Component{

  render() {
    return (
      <div class="signup__container">
  <div class="container__child signup__thumbnail">
    <div class="thumbnail__logo">
      <img class="logo__shape" width="100px" viewBox="0 0 634 479" src="https://i.imgur.com/BtZWQ9i.png" alt=""/>
    </div>
    <div class="thumbnail__links">
      <ul class="list-inline m-b-0 text-center">
      <h2>
        <li>Get Fit!</li><br/>
        <li>Stay Motivated!</li><br/>
        <li>Keep Track of Your Daily Nutrition!</li><br/>
        <li>Buy Fresh Meals Directly!</li>
      </h2>
      </ul>
    </div>
    <div class="signup__overlay"></div>
  </div>
</div>
    );
  }

}
export default Splash;
