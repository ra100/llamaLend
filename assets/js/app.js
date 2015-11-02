// var _ = require("lodash");
var React = require("react");
var ReactDOM = require("react-dom");
var injectTapEventPlugin = require("react-tap-event-plugin");
var Header = require("./build/react/Header"); // Our custom react component
var LoginForm = require("./build/react/LoginForm");
// var i18n = require("i18n");
// require('fs');
//
// console.log(i18n);
//
// i18n.configure({
//     locales: ["en", "cs", "sk"],
//     directory: "/locales",
//     locale: "en",
//     defaultLocale: "en",
//     cookie: "language"
// });

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
ReactDOM.render(<Header/>, document.getElementById("header"));
ReactDOM.render(<LoginForm/>, document.getElementById("app"));
