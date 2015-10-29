/** In this file, we create a React component which incorporates components provided by material-ui */
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var AppBar = require("material-ui/lib/app-bar");

var Header = _react2["default"].createClass({
  displayName: "Header",

  render: function render() {
    return _react2["default"].createElement(AppBar, { title: "Title", iconClassNameRight: "muidocs-icon-navigation-expand-more" });
  }

});

module.exports = Header;