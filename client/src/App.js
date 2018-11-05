import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PushNotification from 'PushNotification'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {

  componentWillReceiveProps({ data: { newNotification: { label } } }) {
    toast(label);
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <PushNotification/>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

const subNewNotification = gql`
  subscription {
    newNotification {
      label
    }
  }
`;

export default graphql(subNewNotification)(App);
