import LoginPage from './components/LoginPage';
import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
    render() {
      return (
        <LoginPage/>
      )
    }
  }
render(<App />, document.getElementById('app'));