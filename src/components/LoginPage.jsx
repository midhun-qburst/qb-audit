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
      isLoggedIn: false,
      userType: ""
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
    this.setState({ isLoggedIn: true, userType: this.state.user });
    const x = this.state.isLoggedIn;
    // if (this.state.user === "auditee") {

    //   <Redirect from="/login" to="/auditee"/>
    // }
    // this.state.user === "auditor" ? <Redirect to="/auditee"/> : null
  };
  render() {
    if (this.state.isLoggedIn && this.state.userType == "auditee")
      return <Redirect from={"/login"} to={"/auditee"} />;
    else if (this.state.isLoggedIn && this.state.userType == "auditor")
      return <Redirect from={"/login"} to={"/auditor"} />;
    else if (this.state.isLoggedIn && this.state.userType == "organizer")
      return <Redirect from={"/login"} to={"/organizer"} />;
    else {
      return (
        <div>
          <h1>Code Audit Manager</h1>
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
}
