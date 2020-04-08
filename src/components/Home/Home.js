import React, { Component } from 'react';
import './Home.css';
import coffeeLove from './../../assets/img/coffee-bean-heart_transparent.png';

export class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home__id">
        <div className="afterEnded">
          <div className="afterEnded-image">
            <img
              width="60%"
              src={coffeeLove}
              alt="coffee-hearts"
              className="afterEnded-image__image"
            />
          </div>

          <div className="afterEnded-text">
            <div>
              <span>Café</span> <span>amor</span>
            </div>
            <div className="afterEnded-text-subtitle">
              Home of Coffee - Coorg, India
            </div>
            <div className="afterEnded-text-subtitle italic">Estd. 1929</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
