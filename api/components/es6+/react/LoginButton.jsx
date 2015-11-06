import React from "react";
import ReactDOM from "react-dom";
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
  openModal () {
    this.refs
      .loginForm
      .refs
      .wrappedElement
      .show();
  }

  render () {
    return (
      <div>
        <FlatButton label={<FormattedMessage {...messages.login}/>} onTouchTap={this
          .openModal
          .bind(this)}/>
        <LoginForm ref="loginForm"/>
      </div>
    );
  }
};

module.exports = LoginButton;
