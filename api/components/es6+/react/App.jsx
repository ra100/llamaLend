import React from "react";
import {IntlMixin, FormattedDate} from "react-intl";
import ThemeManager from "material-ui/lib/styles/theme-manager";
import Theme from "./Theme";
import Header from "./Header";
import LoginButton from "./LoginButton";

const App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {muiTheme: ThemeManager.getMuiTheme(Theme)};
  },

  render () {
    return (
      <div id="header"><Header/><LoginButton/></div>
    );
  }
});

module.exports = App;