import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CafeAmor from './../../../assets/img/cafe-amor.png';
import './Navbar.css';

class componentName extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={CafeAmor} alt="cafe-amor-logo" width="160px" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div>
            <Link
              to="/Design-Jam-Submission"
              className="navbar-menu-link btn-1"
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              to="/Design-Jam-Submission/about"
              className="navbar-menu-link btn-1"
            >
              ABOUT
            </Link>
          </div>
          <div>
            <Link
              className="navbar-menu-link btn-1"
              to="/Design-Jam-Submission/variants"
            >
              VARIANTS
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
