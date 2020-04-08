import React, { Component } from 'react';
import './Variants.css';
export class Variants extends Component {
  render() {
    return (
      <div className="variant-container" id="variant__id">
        <div className="variant-card-container">
          <div className="card">
            <div className="title">Coffee Robusta</div>
            <div className="content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
          </div>
          <div className="card">
            <div className="title">Coffee Arabica</div>
            <div className="content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Variants;
