import React from 'react';
import i18n from "i18n";
import {FlatButton} from "material-ui";
import {FormattedMessage, defineMessages} from "react-intl";
import LoginForm from "./LoginForm";

const messages = defineMessages({
  login: {
    id: "loginButton",
    description: "Name on login button",
    defaultMessage: "Login"
  }
});

class LoginButton extends React.Component {
  render () {
    return (
      <div>
        <FlatButton label={<FormattedMessage {...messages.login} onTouchTap={this._handleTouchTap}/>}/>
        <LoginForm ref="loginForm"/>
      </div>
    );
  }

  _handleTouchTap () {
    console.log("tap fap tap");
    console.log(this.refs);
    this.refs
      .loginForm
      .show();
  }
};

module.exports = LoginButton;
