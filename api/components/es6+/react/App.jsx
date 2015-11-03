import React from "react";
import {IntlMixin, FormattedDate} from "react-intl";
import ThemeManager from "material-ui/lib/styles/theme-manager";
import Theme from "./Theme";
import Header from "./Header";
import LoginForm from "./LoginForm";

const App = React.createClass({
  mixins: [IntlMixin], childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {muiTheme: ThemeManager.getMuiTheme(Theme)};
  },

  render () {
    return (
      <div>
        <div id="header"><Header/></div>
        <div id="body"><LoginForm/></div>
      </div>
    );
    // <FormattedDate value={1446561681} style="numeric" locales={['en-US']}/>
  }
});

module.exports = App;