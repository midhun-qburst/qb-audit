import React, { Component } from "react";
import "../css/welcome-page.css";
import { Button } from "rmwc/Button";
import { FormField } from "rmwc/FormField";
import { TextField } from "rmwc/TextField";
import { Redirect, withRouter } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      isLoggedIn: false
    };
  }

  handleUserName = event => {
    this.setState({ user: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = () => {
    debugger;
    this.setState({ isLoggedIn: true });
    const x = this.state.isLoggedIn;
    // if (this.state.user === "auditee") {

    //   <Redirect from="/login" to="/auditee"/>
    // }
    // this.state.user === "auditor" ? <Redirect to="/auditee"/> : null
  };
  render() {
    debugger;
    return (
      <div>
        <h1>Code Audit Manager</h1>
        {this.state.isloggedIn && <Redirect to="/auditee" />}
        <FormField className="login-card">
          <TextField
            label="Username"
            id="username"
            onChange={this.handleUserName}
          />
          <div>
            <TextField
              label="Password"
              id="password"
              type="password"
              onChange={this.handlePassword}
            />
          </div>
          <Button
            raised
            theme={["primary-bg", "text-primary-on-secondary"]}
            onClick={this.handleSubmit}
          >
            login
          </Button>
        </FormField>
      </div>
    );
  }
}
