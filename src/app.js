import Hello from './components/Hello';
import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
    render() {
      return (
        <Hello/>
      )
    }
  }
render(<App />, document.getElementById('app'));