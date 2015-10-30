"use strict";

const React = require("react");
const ThemeManager = require("material-ui/lib/styles/theme-manager");
const Theme = require("./Theme");
const FlatButton = require("material-ui/lib/flat-button");

const LoginButton = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  },

  text: {
    login: "login"
  },

  render: function () {
    return (
      <FlatButton label={this.text.login}/>
    );
  }
});

module.exports = LoginButton;
