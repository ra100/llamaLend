import React from "react";
import i18n from "i18n";
import {TextField, Dialog, FlatButton} from "material-ui";
import {defineMessages, FormattedMessage, injectIntl} from "react-intl";

const messages = defineMessages({
  userName: {
    id: "userName",
    description: "Username label",
    defaultMessage: "Login"
  },
  hintUserName: {
    id: "hintUserName",
    description: "Hint message for username",
    defaultMessage: "Enter username or email"
  },
  password: {
    id: "password",
    description: "Password label",
    defaultMessage: "Password"
  },
  hintPassword: {
    id: "hintPassword",
    description: "Password field placeholder",
    defaultMessage: "Type password here"
  },
  login: {
    id: "loginNowButton",
    description: "Login button on form",
    defaultMessage: "Login"
  },
  loginErrorNoLogin: {
    id: "loginErrorNoLogin",
    description: "when no login or too short is entered",
    defaultMessage: "Please, enter your username"
  },
  loginErrorNoPassword: {
    id: "loginErrorNoPassword",
    description: "when no password or too short is entered",
    defaultMessage: "Please, enter your password"
  },
  loginErrorUserNotFound: {
    id: "loginErrorUserNotFound",
    description: "When username not found",
    defaultMessage: "Username or email not found"
  },
  loginErrorWrongPassword: {
    id: "loginErrorWrongPassword",
    description: "When password doesn't match username",
    defaultMessage: "Wrong password"
  }
});

class LoginForm extends React.Component {
  /**
     * Bind this to methods
     * @param  {string} ...methods method name
     * @return {[type]}            [description]
     */
  _bind (...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor (props) {
    super(props);
    this.state = {
      login: null,
      password: null,
      errorTextLogin: "",
      errorTextPassword: ""
    };
    this._bind("_handleSubmit", "_handleLoginChange", "_handlePasswordChange");
  }

  _handleSubmit () {
    this._checkLogin();
    this._checkPassword();
    let ok = true;
    if (this.state.errorTextLogin != "" || this.state.errorTextPassword != "") {
      ok = false;
    }
    if (ok) {
      this._checkCredentials();
    };
    // this.dismiss();
  }

  /**
 * Check credentials against backend
 * @return {[type]} [description]
 */
  _checkCredentials () {
    let user = this.state.login;
    let pwd = this.state.password;
    const {formatMessage} = this.props.intl;
    if (user.length < 3) {
      this.state.errorTextLogin = formatMessage(messages.loginErrorUserNotFound);
      this._updateErrors();
    } else if (pwd.length < 8) {
      this.state.errorTextPassword = formatMessage(messages.loginErrorWrongPassword);
      this._updateErrors();
    } else {
      console.log("TODO: waterlock-local-auth");
    }
  }

  /**
 * check login input
 * @return {[type]} [description]
 */
  _checkLogin () {
    if (this.state.login == null || this.state.login == "") {
      const {formatMessage} = this.props.intl;
      this.state.errorTextLogin = formatMessage(messages.loginErrorNoLogin);
      this.refs
        .inputLogin
        .focus();
    } else {
      this.state.errorTextLogin = "";
    }
    this._updateErrors();
  }

  /**
 * check password input
 * @return {[type]} [description]
 */
  _checkPassword () {
    if (this.state.password == null || this.state.password == "") {
      const {formatMessage} = this.props.intl;
      this.state.errorTextPassword = formatMessage(messages.loginErrorNoPassword);
      this.refs
        .inputPassword
        .focus();
    } else {
      this.state.errorTextPassword = "";
    }
    this._updateErrors();
  }

  /**
 * Updates error messages
 * @return {[type]} [description]
 */
  _updateErrors () {
    this.refs
      .inputLogin
      .setErrorText(this.state.errorTextLogin);
    this.refs
      .inputPassword
      .setErrorText(this.state.errorTextPassword);
  }

  /**
 * Update login value
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
  _handleLoginChange (event) {
    this.state.login = event.target
      .value
      .trim();
    this._checkLogin();
  }

  /**
 * Update password value
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
  _handlePasswordChange (event) {
    this.state.password = event.target
      .value
      .trim();
    this._checkPassword();
  }

  /**
 * Show modal
 * @return {[type]} [description]
 */
  show () {
    this.refs
      .loginModal
      .show();
  }

  /**
 * Hide modal
 * @return {[type]} [description]
 */
  dismiss () {
    this.refs
      .loginModal
      .dismiss();
  }

  render () {
    const {formatMessage} = this.props.intl;

    let actionButtons = [
      {
        text: formatMessage(messages.login),
        onTouchTap: this._handleSubmit,
        ref: "login"
      },
    ];
    let login = <TextField hintText={formatMessage(messages.hintUserName)} value={this.state.login} floatingLabelText={formatMessage(messages.userName)} onEnterKeyDown={this._handleSubmit} onChange={this._handleLoginChange} ref="inputLogin"/>;
    let password = <TextField hintText={formatMessage(messages.hintPassword)} value={this.state.password} type="password" floatingLabelText={formatMessage(messages.password)} onEnterKeyDown={this._handleSubmit} onChange={this._handlePasswordChange} ref="inputPassword"/>;

    return (
      <Dialog title={formatMessage(messages.login)} actions={actionButtons} actionFocus="login" ref="loginModal" contentStyle={{
        width: 300
      }}>
        {login}
        <br/>
        {password}
      </Dialog>
    );
  }
};

export default injectIntl(LoginForm);
