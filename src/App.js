import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ListProjects from './ListProjects'


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
          	<Route exact path='/portfolio' render={() => <ListProjects />} />
          </Switch>
      </div>
    );
  }
}

export default App;
