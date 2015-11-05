(function () {
  // var _ = require("lodash");
  let React = require("react");
  let ReactDOM = require("react-dom");
  let IntlProvider = require("react-intl/lib/components/intl");
  let injectTapEventPlugin = require("react-tap-event-plugin");
  let App = require("./build/react/App"); // Our custom react component

  //Needed for React Developer Tools
  window.React = React;

  // var socket = io.connect();
  //
  // console.log(socket);

  let language = readCookie("language");
  let langs = {
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
  ReactDOM.render(
    <IntlProvider locale ={language} messages= {langs[language].messages}>
    <App/>
  </IntlProvider>, document.getElementById("app"));

  /**
     * Read cookie value
     * @param  {string} name cookie name
     * @return {string}      cookie value
     */
  function readCookie(name) {
    name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)', 'i'),
      match = document.cookie
        .match(regex);
    return match && unescape(match[1]);
  }
});
