import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Mira's Webpage</h1>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
