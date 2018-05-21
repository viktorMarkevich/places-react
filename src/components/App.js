import React, { Component } from 'react';
import Authorization from './authorization.js';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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