import React, { Component } from 'react';
import './Header.css';
import Navbar from './../Header/Navbar/Navbar';
export class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Navbar />
      </div>
    );
  }
}

export default Header;
