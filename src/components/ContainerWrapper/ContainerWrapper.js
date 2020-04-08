import React, { Component } from 'react';
import BackgroundVideo from './../../assets/video/zoomtocoorg.mp4';
import Container from './Container/Container';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from './../Header/Header';

export class ContainerWrapper extends Component {
  state = {
    firstLoad: true,
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
    this.setState(
      {
        videoEnded: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            firstLoad: false,
          });
        }, 1500);
      }
    );
  }

  render() {
    return (
      <div className="container-wrapper-container">
        {this.state.firstLoad ? (
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
        ) : (
          <HashRouter>
            <div className="app-container">
              <Header />
              {console.log('Rerendering routes')}
              <Switch>
                <Route path="/" component={Container} />
              </Switch>
            </div>
          </HashRouter>
        )}
      </div>
    );
  }
}

export default ContainerWrapper;
