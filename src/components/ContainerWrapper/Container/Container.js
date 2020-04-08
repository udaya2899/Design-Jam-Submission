import React, { Component } from 'react';
import Home from '../../Home/Home';
import About from '../../About/About';
import Variants from '../../Variants/Variants';
import Contact from '../../Contact/Contact';

export class Container extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="variants">
          <Variants />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default Container;
