import React, { Component } from 'react';

import Header from './components/Header/Header';
import About from './components/About/About';
import Variants from './components/Variants/Variants';
import Home from './components/Home/Home';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Header />
          <Switch>
            <Route path="/Design-Jam-Submission" component={Home} exact />
            <Route path="/Design-Jam-Submission/about" component={About} />
            <Route
              path="/Design-Jam-Submission/variants"
              component={Variants}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
