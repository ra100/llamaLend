"use strict";

const React = require("react");
const TextField = require("material-ui/lib/text-field");
const Card = require("material-ui/lib/card/card");
const CardTitle = require("material-ui/lib/card/card-title");
const CardText = require("material-ui/lib/card/card-text");
const ThemeManager = require("material-ui/lib/styles/theme-manager");
const Theme = require("./Theme");
const i18n = require("i18n");

const LoginForm = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  },

  text: {
    userName: "Login",
    hintUserName: "Type login name here",
    password: "Password",
    hintPassword: "Type password here",
    login: "Login"
  },

  status: {
    login: null,
    password: null,
    errorText: null
  },

  render: function () {
    return (
      <Card>
        <CardTitle title={this.text.login}/>
        <CardText>
          <TextField hintText={this.text.hintUserName} value={this.status.login} floatingLabelText={this.text.userName} errorText={this.status.errorText}/>
          <TextField hintText={this.text.hintPassword} value={this.status.password} type="password" floatingLabelText={this.text.password}/>
        </CardText>
      </Card>
    );
  }
});

module.exports = LoginForm;
