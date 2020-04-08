import React, { Component } from 'react';

import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return <ContainerWrapper />;
  }
}

export default App;
