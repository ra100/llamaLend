import React from "react";
import i18n from "i18n";
import {TextField, Card, CardTitle, CardText} from "material-ui";
import ThemeManager from "material-ui/lib/styles/theme-manager";
import Theme from "./Theme";

const LoginForm = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {muiTheme: ThemeManager.getMuiTheme(Theme)};
  },

  getInitialState () {
    return {login: null, password: null, errorText: null};
  },

  text: {
    userName: "Login",
    hintUserName: "Type login name here",
    password: "Password",
    hintPassword: "Type password here",
    login: "Login"
  },

  render () {
    return (
      <Card>
        <CardTitle title={this.text.login}/>
        <CardText>
          <TextField hintText={this.text.hintUserName} value={this.state.login} floatingLabelText={this.text.userName} errorText={this.state.errorText}/>
          <TextField hintText={this.text.hintPassword} value={this.state.password} type="password" floatingLabelText={this.text.password}/>
        </CardText>
      </Card>
    );
  }
});

module.exports = LoginForm;
