import React, { Component } from 'react';
import Authorization from './components/authorization.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Authorization zip={"12345"} />
        </div>
    );
  }
}

export default App;
