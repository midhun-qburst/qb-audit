import LoginPage from "./components/LoginPage";
import AuditeePage from "./components/AuditeePage";
import AuditorPage from "./components/AuditorPage";
import Organizer from "./components/Organizer";
import Questionnaire from "./components/Questionnaire";

import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Button } from "rmwc/Button";

class App extends Component {
  logOff() {
    sessionStorage.setItem("sessionType", "false");
  }
  componentWillUnmount() {
    this.logOff();
  }

  render() {
    let sessionIsInvalid = false;
    const sessionType = JSON.parse(sessionStorage.getItem("sessionType"));
    if (sessionType) {
      sessionIsInvalid = sessionType;
    }
    const logButton = sessionIsInvalid ? (
      <Link to="/login">
        <Button
          raised
          theme={["primary-bg", "text-primary-on-secondary"]}
          onClick={this.logOff}
        >
          Log off
        </Button>
      </Link>
    ) : (
      <Link to="/login">
        <Button raised theme={["primary-bg", "text-primary-on-secondary"]}>
          Login
        </Button>
      </Link>
    );
    return (
      <div>
        <nav>
          {logButton}

          
        </nav>
        <div>
          <Route path="/login" component={LoginPage} />
          <Route path="/auditee" component={AuditeePage} />
          <Route path="/auditor" component={AuditorPage} />
          <Route path="/organizer" component={Organizer} />
          <Route path="/q/:id" component={Questionnaire} />
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
