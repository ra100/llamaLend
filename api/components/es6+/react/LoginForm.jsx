import React from "react";
import i18n from "i18n";
import {
  TextField,
  Dialog,
  FlatButton
} from "material-ui";
import {
  defineMessages,
  FormattedMessage,
  injectIntl
} from "react-intl";
import {
  $
} from "zepto-browserify";

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
  register: {
    id: "registerButton",
    description: "Register button on form",
    defaultMessage: "Register"
  },
  loginErrorNoLogin: {
    id: "loginErrorNoLogin",
    description: "when no login or too short is entered",
    defaultMessage: "Please, type username or email"
  },
  loginErrorNoPassword: {
    id: "loginErrorNoPassword",
    description: "when no password or too short is entered",
    defaultMessage: "Please, type password"
  },
  loginErrorUserNotFound: {
    id: "loginErrorUserNotFound",
    description: "When username not found",
    defaultMessage: "Username or email not found"
  },
  loginErrorShortPassword: {
    id: "loginErrorShortPassword",
    description: "When password is too short",
    defaultMessage: "Password too short"
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
    this._bind("_handleSubmit", "_handleLoginChange", "_handlePasswordChange", "_handleRegister");
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
  }

  _handleRegister () {
    this._checkLogin();
    this._checkPassword();
    let ok = true;
    if (this.state.errorTextLogin != "" || this.state.errorTextPassword != "") {
      ok = false;
    }
    if (ok) {
      this._register();
    }
  }

  /**
 * Check credentials against backend
 * @return {[type]} [description]
 */
  _checkCredentials () {
    let user = this.state.login;
    let pwd = this.state.password;
    const {
      formatMessage
    } = this.props.intl;
    if (user.length < 3) {
      this.state.errorTextLogin = formatMessage(messages.loginErrorUserNotFound);
      this._updateErrors();
    } else if (pwd.length < 8) {
      this.state.errorTextPassword = formatMessage(messages.loginErrorShortPassword);
      this._updateErrors();
    } else {
      this._auth();
    }
  }

  /**
 * Check login credentials
 * @return {[type]} [description]
 */
  _auth () {
    let _this = this;
    let login = this.state.login,
      payload = {
        password: this.state.password,
        _csrf: this._csrf(),
        type: "local"
      };
    if (login.indexOf("@") < 0) {
      payload.username = login;
    } else {
      payload.email = login;
    }
    $.ajax({
      type: "POST",
      url: "/auth/local",
      data: payload,
      success: function(data, status, xhr) {
        console.log(data);
      },
      error: function(data, status, xhr) {
        let message = JSON.parse(data.response);
        let target = message.target;
        if (target == undefined) {
          target = "Password";
        }
        _this.state["errorText" + target] = message.error;
        _this._updateErrors();
        console.log(message);
      }
    });
  }

  /**
   * Create new account
   * @return {[type]} [description]
   */
  _register () {
    let _this = this;
    let login = this.state.login,
      payload = {
        password: this.state.password,
        _csrf: this._csrf(),
        type: "local"
      };
    if (login.indexOf("@") < 0) {
      payload.username = login;
    } else {
      payload.email = login;
    }
    $.ajax({
      type: "POST",
      url: "/auth/local/register",
      data: payload,
      success: function(data, status, xhr) {
        console.log(data);
      },
      error: function(data, status, xhr) {
        let message = JSON.parse(data.response);
        let target = message.target;
        if (target == undefined) {
          target = "Password";
        }
        _this.state["errorText" + target] = message.error;
        _this._updateErrors();
        console.log(message);
      }
    });
  }

  _csrf () {
    return window._csrf;
  }

  /**
 * check login input
 * @return {[type]} [description]
 */
  _checkLogin () {
    if (this.state.login == null || this.state.login == "") {
      const {
        formatMessage
      } = this.props.intl;
      this.state.errorTextLogin = formatMessage(messages.loginErrorNoLogin);
      this.refs.inputLogin.focus();
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
      const {
        formatMessage
      } = this.props.intl;
      this.state.errorTextPassword = formatMessage(messages.loginErrorNoPassword);
      this.refs.inputPassword.focus();
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
    this.refs.inputLogin.setErrorText(this.state.errorTextLogin);
    this.refs.inputPassword.setErrorText(this.state.errorTextPassword);
  }

  /**
 * Update login value
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
  _handleLoginChange (event) {
    this.state.login = event.target.value.trim();
    this._checkLogin();
  }

  /**
 * Update password value
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
  _handlePasswordChange (event) {
    this.state.password = event.target.value.trim();
    this._checkPassword();
  }

  /**
 * Show modal
 * @return {[type]} [description]
 */
  show () {
    this.refs.loginModal.setState({open: true});
  }

  /**
 * Hide modal
 * @return {[type]} [description]
 */
  dismiss () {
    this.refs.loginModal.setState({open: false});
  }

  render () {
    const {
      formatMessage
    } = this.props.intl;

    let actionButtons = [
      {
        text: formatMessage(messages.register),
        onTouchTap: this._handleRegister,
        ref: "register"
      }, {
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
