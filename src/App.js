import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="right-nav">
            <Link to="/portfolio" className="nav-item">what I do</Link>
            <Link to="/about" className="nav-item">who I am</Link>
            <Link to="/contact" className="nav-item">get in touch</Link>
          </div>
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
