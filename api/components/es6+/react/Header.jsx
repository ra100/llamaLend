/** In this file, we create a React component which incorporates components provided by material-ui */
// import React from "react";
"use strict";

const React = require("react");
const AppBar = require("material-ui/lib/app-bar");

const Header = React.createClass({
  render() {
    return (
      <AppBar title="LlamaLend" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    );
  }
});

module.exports = Header;