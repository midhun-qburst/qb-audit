import LoginPage from './components/LoginPage';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Button } from 'rmwc/Button';


class App extends Component {
    render() {
        return (
            <div>
            <nav>
                <Button raised >
              <Link to="/login">LoginPage</Link>
              </Button>
            </nav>
            <div>
              <Route path="/login" component={LoginPage}/>
            </div>
          </div>
        )
    }
}
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));