/** In this file, we create a React component which incorporates components provided by material-ui */
// import React from "react";
"use strict";

var React = require("react");
var AppBar = require("material-ui/lib/app-bar");

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(AppBar, { title: "LlamaLend", iconClassNameRight: "muidocs-icon-navigation-expand-more" });
  }
});

module.exports = Header;