import React, { Component } from 'react';
import './About.css';
import CoffeeArt from './../../assets/img/coffee-bean-art-transparent.png';
import CoffeeBag from './../../assets/img/coffee-bag.png';
export class About extends Component {
  render() {
    return (
      <div className="about-container-wrapper">
        <div className="about-container" id="about__id">
          <div className="about-image-container">
            <img src={CoffeeArt} alt="Coffee Beans Stacked" />
          </div>
          <div className="about-title-container">
            <div className="about-title">Finely Ground</div>
            <div className="about-text">
              Our beans are fresh from our farms, roasted and finely ground to
              enrich the aroma
            </div>
          </div>
        </div>
        <div className="about-container-bottom">
          <div className="about-title-container">
            <div className="about-title">Fresh Aroma</div>
            <div className="about-text">
              The Fresh Aroma that comes from our coffee beans soothens your
              soul, gives you the right amount of energy to handle pressure
            </div>
          </div>
          <div className="about-image-container">
            <img width="400px" src={CoffeeBag} alt="Coffee beans in a bag" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
