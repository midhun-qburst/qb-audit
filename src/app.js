import LoginPage from "./components/LoginPage";
import AuditeePage from "./components/AuditeePage";
import AuditorPage from "./components/AuditorPage";
import Organizer from "./components/Organizer";

import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Button } from "rmwc/Button";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/login">
            <Button raised theme={["primary-bg", "text-primary-on-secondary"]}>
              Login
            </Button>
          </Link>

          <Link to="/auditee">
            <Button raised theme={["primary-bg", "text-primary-on-secondary"]}>
              Auditee
            </Button>
          </Link>

          <Link to="/auditor">
            <Button raised theme={["primary-bg", "text-primary-on-secondary"]}>
              Auditor
            </Button>
          </Link>
          <Link to="/organizer">
            <Button raised theme={["primary-bg", "text-primary-on-secondary"]}>
              Organizer
            </Button>
          </Link>
        </nav>
        <div>
          <Route path="/login" component={LoginPage} />
          <Route path="/auditee" component={AuditeePage} />
          <Route path="/auditor" component={AuditorPage} />
          <Route path="/organizer" component={Organizer} />

        </div>
      </div>
    );
  }
}
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
