import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ListProjects from './ListProjects';
import About from './About';
import Contact from './Contact';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedFilter: "portfolio",
    };
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <div className="right-nav">
            <Link to="/whatido" className="nav-item">what I do</Link>
            <Link to="/whoiam" className="nav-item">who I am</Link>
            <Link to="/getintouch" className="nav-item contact">get in touch</Link>
          </div>
          <Switch>
            <Route exact path='/' render={() => <ListProjects />} />
            <Route exact path='/whatido' render={() => <ListProjects />} />
            <Route exact path='/whoiam' render={() => <About />} />
            <Route exact path='/getintouch' render={() => <Contact />} />
          </Switch>
      </div>
    );
  }
}

export default App;
