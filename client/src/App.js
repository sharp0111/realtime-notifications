import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PushNotification from 'PushNotification'

class App extends Component {
  render() {
    return (
      <div className="App-intro">
        <PushNotification/>
      </div>
    );
  }
}

export default App;
