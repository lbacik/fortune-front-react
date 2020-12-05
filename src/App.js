import React, { Component } from 'react';
import './App.css';
import Fortune from './Fortune/Fortune'
import FortuneComponent from './Fortune/FortuneComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
          <FortuneComponent />
      </div>
    );
  }
}

export default App;
