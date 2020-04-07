import React, { Component } from 'react';
import './Home.css';
import BackgroundVideo from './../../assets/video/zoomtocoorg.mp4';
import coffeeLove from './../../assets/img/coffee-bean-heart_transparent.png';

export class Home extends Component {
  state = {
    videoEnded: false,
    videoLoading: true,
  };

  componentDidMount() {
    if (this.video) {
      this.video.addEventListener('loadeddata', () => {
        this.setState({ videoLoading: false });
      });
    }
  }

  componentWillUnmount() {
    if (this.video) {
      this.video.removeEventListener('loadeddata', () => {});
    }
  }

  fadeVideo() {
    this.setState({
      videoEnded: true,
    });
  }

  render() {
    return (
      <div className="home-container">
        <div className="video-container">
          <video
            ref={(ref) => (this.video = ref)}
            onEnded={() => this.fadeVideo()}
            className="videoTag"
            autoPlay
            muted
            style={{
              opacity: this.state.videoLoading
                ? 0
                : this.state.videoEnded
                ? 0
                : 1,
              transition: 'opacity, 1.5s ease-in-out',
            }}
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="afterEnded">
          <img
            width="30%"
            style={{
              opacity: this.state.videoEnded ? 1 : 0,
            }}
            src={coffeeLove}
            alt="coffee-hearts"
            className="afterEnded-image"
          />
          {/* <div className="brand-title">Cafe Amor</div> */}
        </div>
      </div>
    );
  }
}

export default Home;
