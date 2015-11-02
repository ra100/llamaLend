import React from 'react';
import i18n from "i18n";
import {FlatButton} from "material-ui";
import ThemeManager from "material-ui/lib/styles/theme-manager";
import Theme from "./Theme";


const LoginButton = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {muiTheme: ThemeManager.getMuiTheme(Theme)};
  },

  text: {
    login: "login"
  },

  render: function() {
    return (
      <FlatButton label={this.text.login}/>
    );
  }
});

module.exports = LoginButton;
