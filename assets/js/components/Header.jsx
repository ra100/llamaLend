/** In this file, we create a React component which incorporates components provided by material-ui */
/** @jsx React.DOM */
/* jshint -W104 */
"use strict";

const React = require("react");
const AppBar = require("material-ui/lib/app-bar");

const Header = React.createClass({

  render() {
    return (
      <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    );
  },

});

module.exports = Header;