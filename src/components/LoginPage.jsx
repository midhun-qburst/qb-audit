import React, { Component } from "react";
import "../css/welcome-page.css";
import { Button } from "rmwc/Button";
import { FormField } from "rmwc/FormField";
import { TextField } from "rmwc/TextField";
import { Redirect } from "react-router-dom";
import UsersData from "../data/users.json";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isLoggedIn: false,
      user: {
        username: "",
        userType: "",
        password: ""
      }
    };
  }
  componentDidMount() {
    sessionStorage.setItem("sessionType", "false");
  }

  handleUserName = event => {
    this.setState({ userName: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = () => {
    this.userAuth(this.state.userName, this.state.password);
    this.setState({ isLoggedIn: true });
  };
  userAuth = (name, password) => {
    let type = "";
    const array = Object.keys(UsersData).map(key => {
      if (
        UsersData[key].username === name &&
        UsersData[key].password == password
      ) {
        type = UsersData[key].userType;
      }
    });
    if (type === "") {
      alert("Invalid credentials..!!");
    } else {
      this.setState({ user: { userType: type } });
      sessionStorage.setItem("sessionType", "true");
    }

    console.log(this.state.user);
  };
  render() {
    if (this.state.isLoggedIn)
      return <Redirect from={"/login"} to={"/" + this.state.user.userType} />;
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
