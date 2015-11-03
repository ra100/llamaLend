// var _ = require("lodash");
var React = require("react");
var ReactDOM = require("react-dom");
var injectTapEventPlugin = require("react-tap-event-plugin");
var App = require("./build/react/App"); // Our custom react component

//Needed for React Developer Tools
window.React = React;

// var socket = io.connect();
//
// console.log(socket);

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<App locales={['en-US']} />, document.getElementById("app"));
