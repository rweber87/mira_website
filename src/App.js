import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ListProjects from './ListProjects';
import About from './About';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' render={() => <ListProjects />} />
            <Route exact path='/portfolio' render={() => <ListProjects />} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/contact' render={() => <Contact />} />
          </Switch>
      </div>
    );
  }
}

export default App;
