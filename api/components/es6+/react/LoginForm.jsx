import React from "react";
import i18n from "i18n";
import {TextField, Dialog, FlatButton} from "material-ui";
import {defineMessages, FormattedMessage, injectIntl} from "react-intl";

const messages = defineMessages({
  userName: {
    id: "userName",
    description: "User name label",
    defaultMessage: "Login"
  },
  hintUserName: {
    id: "hintUserName",
    description: "Hint message for user name",
    defaultMessage: "Type login name here"
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
  }
});

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: null,
      password: null,
      errorText: null
    };
  }

  render () {
    const {formatMessage} = this.props.intl;

    let actionButtons = [
      {
        text: "Cancel"
      }, {
        text: formatMessage(messages.login),
        onTouchTap: this._onDialogSubmit,
        ref: "login"
      },
    ];

    return (
      <Dialog title={formatMessage(messages.login)} actions={actionButtons} actionFocus="login" modal={this.state.modal} ref="loginModal">
        <TextField hintText={formatMessage(messages.hintUserName)} value={this.state.login} floatingLabelText={formatMessage(messages.userName)} errorText={this.state.errorText}/>
        <TextField hintText={formatMessage(messages.hintPassword)} value={this.state.password} type="password" floatingLabelText={formatMessage(messages.password)}/>
      </Dialog>
    );
  }

  _onDialogSubmit () {
    console.log(this.refs);
  }
};

export default injectIntl(LoginForm);
