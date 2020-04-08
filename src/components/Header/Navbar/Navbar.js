import React, { Component } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import CafeAmor from './../../../assets/img/cafe-amor.png';
import './Navbar.css';

class componentName extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-brand">
            <NavHashLink to="/">
              <img src={CafeAmor} alt="cafe-amor-logo" width="160px" />
            </NavHashLink>
          </div>
          <div className="navbar-menu">
            <div>
              <NavHashLink
                smooth
                to="/#home"
                className="navbar-menu-link btn-1"
              >
                HOME
              </NavHashLink>
            </div>
            <div>
              <NavHashLink
                smooth
                to="/#about"
                className="navbar-menu-link btn-1"
                activeClassName="btn-1-active"
              >
                ABOUT
              </NavHashLink>
            </div>
            <div>
              <NavHashLink
                smooth
                className="navbar-menu-link btn-1"
                to="/#variants"
              >
                VARIANTS
              </NavHashLink>
            </div>
            <div>
              <NavHashLink
                smooth
                className="navbar-menu-link btn-1"
                to="/#contact"
              >
                CONTACT US
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
