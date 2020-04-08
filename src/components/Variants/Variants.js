import React, { Component } from 'react';
import './Variants.css';
import { Parallax } from 'react-scroll-parallax';

export class Variants extends Component {
  render() {
    return (
      <div className="variant-container" id="variant__id">
        <div className="about-title">VARIANTS</div>
        <div className="variant-card-container">
          <Parallax y={[-100, 30]}>
            <div className="card card-shadow">
              <div className="card-title">Coffee Robusta</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat ipsum vel eros pellentesque vehicula. Ut vel
                rhoncus ante. Pellentesque ipsum nunc, convallis ac pellentesque
                a, pharetra a urna. Donec iaculis luctus massa id blandit.
              </div>
            </div>
          </Parallax>
          <Parallax y={[40, -40]}>
            <div className="card card-shadow">
              <div className="card-title">Coffee Arabica</div>
              <div className="card-content">
                <span>{'    '}</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat ipsum vel eros pellentesque vehicula. Ut vel
                rhoncus ante. Pellentesque ipsum nunc, convallis ac pellentesque
                a, pharetra a urna. Donec iaculis luctus massa id blandit.
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Variants;
