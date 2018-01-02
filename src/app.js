import LoginPage from './components/LoginPage';
import AuditeePage from './components/AuditeePage';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Button } from 'rmwc/Button';


class App extends Component {
    render() {
        return (
            <div>
            <nav>
                <Button raised theme={["primary-bg", "text-primary-on-secondary"]}>
              <Link to="/login">LoginPage</Link>             
              </Button>
              <Button raised >
              <Link to="/auditee">Auditee</Link>
              </Button>
            </nav>
            <div>
              <Route path="/login" component={LoginPage}/>
              <Route path="/auditee" component={AuditeePage}/>
            </div>
          </div>
        )
    }
}
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));