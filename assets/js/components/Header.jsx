/** In this file, we create a React component which incorporates components provided by material-ui */
/* jshint -W104 */
// 'use strict';
//
// const React = require('react');
// const AppBar = require('material-ui/lib/app-bar');
//
// const Header = React.createClass({
//
//   render() {
//     return (
//       <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
//     );
//   },
//
// });
//
// module.exports = Header;

/** @jsx React.DOM */

define(['react'], function(React) {

var Header = React.createClass({

    render: function() {
      return (
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      );
    },

}); //CommentForm

module.exports = Header;

}); //define

