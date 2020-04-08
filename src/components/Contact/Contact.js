import React, { Component } from 'react';
import './Contact.css';
import CoffeeWave from './../../assets/img/coffee-waves.png';

export class Contact extends Component {
  render() {
    return (
      <div className="contact-container-wrapper">
        <div className="contact-container" id="contact__id">
          <div className="contact-card">
            <div className="contact-card-title">Reach out to us</div>
            <div className="contact-card-content">
              <div className="social-media-icons">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-google"></i>
                <i className="fa fa-twitter"></i>
              </div>
            </div>
            <div className="contact-card-subtitle">
              <div>
                Contact <div>+91 93458 78901</div>
              </div>
              <div>
                Email <div>contact@cafeamor.com</div>
              </div>
            </div>
          </div>
          <div className="contact-image-container">
            <img src={CoffeeWave} alt="Coffee in a cup amidst beans" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
