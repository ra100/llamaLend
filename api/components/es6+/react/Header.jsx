/** In this file, we create a React component which incorporates components provided by material-ui */
// import React from "react";
"use strict";

const React = require("react");
const AppBar = require("material-ui/lib/app-bar");
const IconButton = require("material-ui/lib/icon-button");
const MoreHoriz = require("material-ui/lib/svg-icons/navigation/more-horiz");
const ThemeManager = require("material-ui/lib/styles/theme-manager");
const Theme = require("./Theme");
const LoginButton = require("./LoginButton");

const Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  },

  render: function () {
    return (
      <AppBar title="LlamaLend"
          iconElementLeft={<IconButton><MoreHoriz /></IconButton>}
          iconElementRight={<LoginButton/>}/>
    );
  }
});

module.exports = Header;