import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到 React</h2>
        </div>
        <p className="App-intro">
          你可以在<code>src/App.js</code> 修改
        </p>
      </div>
    );
  }
}

export default App;
