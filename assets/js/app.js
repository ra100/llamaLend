// var _ = require("lodash");
"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var IntlProvider = require("react-intl/lib/components/intl");
var injectTapEventPlugin = require("react-tap-event-plugin");
var App = require("./build/react/App"); // Our custom react component

//Needed for React Developer Tools
window.React = React;

// var socket = io.connect();
//
// console.log(socket);

var language = readCookie("language");
if (language == "") {
  language = "en";
}
var langs = {
  en: require("./locales/en"),
  cs: require("./locales/cs"),
  sk: require("./locales/sk")
};

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(React.createElement(
  IntlProvider,
  { locale: language, messages: langs[language].messages },
  React.createElement(App, null)
), document.getElementById("app"));

/**
 * Read cookie value
 * @param  {string} name cookie name
 * @return {string}      cookie value
 */
function readCookie(name) {
  name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)', 'i'),
      match = document.cookie.match(regex);
  return match && unescape(match[1]);
}
